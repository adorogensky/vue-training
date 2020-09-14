# Vue Training

## Project setup
### Install Visual Studio Code
Also: install Vetur plugin
```
[alex@zion ~]$ flatpak install flathub com.visualstudio.code
```
### Install Node.js
```
⬢[alex@toolbox ~]$ sudo dnf install node -y
⬢[alex@toolbox ~]$ node -v
v12.18.3
```
Below steps are needed to avoid the EACCESS error when 
'npm install -g' is executed as a non-priviledged process
```
⬢[alex@toolbox ~]$ mkdir ~/.npm-global
⬢[alex@toolbox ~]$ npm config set prefix '~/.npm-global'
⬢[alex@toolbox ~]$ echo 'export PATH=~/.npm-global/bin:$PATH' > ~/.profile 
⬢[alex@toolbox ~]$ . ~/.profile
```
### Install Vue.js CLI
```
⬢[alex@toolbox ~]$ npm i -g @vue/cli
⬢[alex@toolbox ~]$ vue --version
@vue/cli 4.5.6
```
### Create Vue.js app
Pick default preset: vue2, babel, eslint
```
⬢[alex@toolbox ~]$ cd vue-training
⬢[alex@toolbox vue-training]$ vue create .
```
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
