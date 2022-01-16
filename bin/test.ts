#! /usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { EOL } from 'os';
import { spawn } from 'child_process';
import { Command } from 'commander';
import chalk from 'chalk';

const ROOT_DIR = path.resolve(__dirname, '..');
const TEMPLATE_FILES_DIR = path.join(ROOT_DIR, 'template_files');

const creatorPackageJson = require(path.join(ROOT_DIR, 'package.json'));

function createNewProjectDirectory(projectName: string): void {
  console.log(chalk.green('Creating project directory...'));
  if (!fs.existsSync(projectName)){
    fs.mkdirSync(projectName);
  }
}

function copyTemplateFiles(creatingProjectDirPath: string): void {
  console.log(chalk.green('Copying template files...'));
  try {
    fs.copySync(TEMPLATE_FILES_DIR, creatingProjectDirPath, {
      filter: (src, dest) => {
        return !src.endsWith('packages-list.json');
      }
    });
  } catch (err) {
    console.log(chalk.red('Can not copy files from template directory.'));
    process.exit(1);
  }
}

function createPackageJsonFile(
  creatingProjectDirPath: string, creatingAppName: string
): Promise<void> {
  return new Promise((resolve) => {
    console.log(chalk.green('Creating package.json file...'));
    const result = spawn('npm', ['init', '-y'], {
      cwd: creatingProjectDirPath,
      stdio: 'inherit',
    });
    result.on('close', () => {
      resolve();
    });
  });
}

function installPackages(creatingProjectDirPath: string): void {
  const packages = require(path.join(TEMPLATE_FILES_DIR, 'packages-list.json'));
  console.log(chalk.green('Installing devDependencies...'));
  const installDevPackagesResult = spawn(
    'npm', ['install', '--seve-dev', ...packages.devDependencies], {
      cwd: creatingProjectDirPath,
      stdio: 'inherit',
    }
  );
  installDevPackagesResult.on('close', () => {
    console.log(chalk.green('Installing dependencies...'));
    spawn(
      'npm', ['install', '--seve-dev', ...packages.dependencies], {
        cwd: creatingProjectDirPath,
        stdio: 'inherit',
      }
    );
  });
}

function createApp() {
  let projectName = '';

  const program = new Command(creatorPackageJson.name);
  program
      .version(creatorPackageJson.version)
      .argument('<project-directory>')
      .action(projectDirectory => {
          projectName = projectDirectory;
      })
      .parse(process.argv)
  ;
  
  if (!projectName) {
    console.log('Please specify project directory.');
    process.exit(1);
  }
  
  createNewProjectDirectory(projectName);
  
  const creatingProjectDirPath = path.resolve(projectName);
  const creatingAppName = path.basename(creatingProjectDirPath);
  
  copyTemplateFiles(creatingProjectDirPath);

  createPackageJsonFile(creatingProjectDirPath, creatingAppName)
    .then(() => installPackages(creatingProjectDirPath))
  ;

  console.log(chalk.green('Done. You can go to your new project directory.'));

  program.parse(process.argv);
}

createApp();
