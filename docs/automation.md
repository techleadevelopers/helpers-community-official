git status --porcelain | ForEach-Object {
    # Pega o caminho do arquivo (pulando os 3 primeiros caracteres do status)
    $file = $_.Substring(3).Trim()
    
    # Adiciona e faz o commit de cada arquivo individualmente
    git add "$file"
    git commit -m "update: update $file"
}

# Depois que o loop terminar, faz o push
git push origin master

