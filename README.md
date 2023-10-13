# install deno for linux
- curl -fsSL https://deno.land/x/install/install.sh | sh
- vim ~/.zshrc
```sh
export DENO_INSTALL="/home/alljoy/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```
- source ~/.zshrc
- deno --version

## update for deno
- deno upgrade

# first program
- vim first.ts
```ts
console.log("Welcome to Deno!");
```
- deno run first.ts