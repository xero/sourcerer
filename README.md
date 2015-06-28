```
   ██████  ██████  ██   ██ ██████  █████   █████  ██████  █████  ██████
  ██░░░░  ██░░░░██░██  ░██░░██░░████░░░██ ██░░░██░░██░░████░░░██░░██░░██
 ░░█████ ░██   ░██░██  ░██ ░██ ░░░██  ░░ ░███████ ░██ ░░░███████ ░██ ░░
  ░░░░░██░██   ░██░██  ░██ ░██   ░██   ██░██░░░░  ░██   ░██░░░░  ░██   
  ██████ ░░██████ ░░██████░███   ░░█████ ░░██████░███   ░░██████░███   
 ░░░░░░   ░░░░░░   ░░░░░░ ░░░     ░░░░░   ░░░░░░ ░░░     ░░░░░░ ░░░   
  r  e  a  d     c  o  d  e     l  i  k  e     a     w  i  z  a  r  d 

 sourcerer by xero harrison (http://sourcerer.xero.nu)
  ├─ based on sorcerer by Jeet Sukumaran (http://jeetworks.org)
  └─ based on mustang by Henrique C. Alves (hcarvalhoalves@gmail.com)
```

![](https://raw.githubusercontent.com/xero/sourcerer/master/termcolors.png)

a 16 bit color scheme for hackers.
 - [vim](#vim)
 - [Xresources](#Xresources)
 - [framebuffer](#framebuffer)
 - [iterm](#iterm)

#install
![](https://raw.githubusercontent.com/xero/sourcerer/master/preview.png)

##vim
copy [sourcerer.vim](https://github.com/xero/sourcerer/blob/master/sourcerer.vim) to `~/.vim/colors/` and in your `~/.vimrc` add `colorscheme sourcerer` and turn `:syntax on`.

##Xresources
copy the contents of [sourcerer.Xresources](https://github.com/xero/sourcerer/blob/master/sourcerer.Xresources) into your `~/.Xresources` or `~/.Xdefaults` file. your system may require you to call `xrdb -merge ~/.Xresources` and/or restart your terminal emulator.

##framebuffer
copy [sourcerer.sh](https://github.com/xero/sourcerer/blob/master/sourcerer.sh) into your home directory and add `source ~/sourcerer.sh` to your shell init script `~/.bashrc` or `~/.zshrc`. colors will only be applied in a new tty session.

##iterm
launch iterm/item2, type `CMD+i`, navigate to `Colors` tab, click on `Load Presets`, click on `Import` and select [sourcerer.itermcolors](https://github.com/xero/sourcerer/blob/master/sourcerer.itermcolors).


![](https://raw.githubusercontent.com/xero/sourcerer/master/sourcerer_shell.gif)
