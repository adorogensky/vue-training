# Vue Training

> A project that showcases how to build a forum with Vue.js

## Project setup (Fedora 32 Silverblue)
### Install Visual Studio Code
 * #### Install Vetur plugin

``` bash
[alex@zion ~]$ flatpak install flathub com.visualstudio.code
```

### Install Node.js
``` bash
⬢[alex@toolbox ~]$ sudo dnf install node -y
⬢[alex@toolbox ~]$ node -v
v12.18.3
⬢[alex@toolbox ~]$ npm -v
6.14.6

# Next steps are needed to avoid the EACCESS error when 
# 'npm install -g' is executed by a non-root user

⬢[alex@toolbox ~]$ mkdir ~/.npm-global
⬢[alex@toolbox ~]$ npm config set prefix '~/.npm-global'
⬢[alex@toolbox ~]$ echo 'export PATH=~/.npm-global/bin:$PATH' > ~/.profile 
⬢[alex@toolbox ~]$ . ~/.profile
```

### Install Yarn
``` bash
⬢[alex@toolbox ~]$ npm i -g yarn

# For this to work, I had to update .bashrc to add the new global directory
# ~/.npm-global/bin to PATH
⬢[alex@toolbox ~]$ yarn --version
1.22.5
```

### Install Vue.js CLI with Yarn
``` bash
# optionally remove previously intstall npm and yarn packages for vue-cli
⬢[alex@toolbox vue-training]$ yarn global remove vue-cli
⬢[alex@toolbox vue-training]$ npm uninstall -g @vue/cli

⬢[alex@toolbox vue-training]$ yarn global add vue-cli
⬢[alex@toolbox vue-training]$ vue --version
2.9.6

# or install a specific version if needed
⬢[alex@toolbox vue-training]$ yarn global add vue-cli@2.9.1
```

### Install Vue.js CLI with npm
``` bash
⬢[alex@toolbox ~]$ npm i -g @vue/cli
⬢[alex@toolbox ~]$ vue --version
@vue/cli 4.5.6
```

### Create Vue.js App
``` bash
⬢[alex@toolbox ~]$ cd vue-training
⬢[alex@toolbox vue-training]$ vue create .
# Pick default preset: vue2, babel, eslint
```

### Create Vue.js App from a template

``` bash
⬢[alex@toolbox vue-training]$ vue init webpack-template .
# or to generate in 'vue-training' directory in current directory
⬢[alex@toolbox vue-training]$ vue init webpack-template vue-training
```

### Install and run App with Yarn

``` bash
⬢[alex@toolbox vue-training]$ yarn install
⬢[alex@toolbox vue-training]$ yarn dev
```

### Install and run App with npm

``` bash
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
