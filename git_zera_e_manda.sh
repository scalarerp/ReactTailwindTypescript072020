echo reiniciando o repostirorio do zero
rm -rf .git
git init
git add .
git commit -m "`date +%Y-%m-%d-%H-%M-%S`"
git remote add origin https://github.com/scalarerp/ReactTw.git
git push -u --force origin master
git status
read -p "Tecle [Enter] para sair..."
