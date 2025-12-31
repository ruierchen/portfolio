#!/bin/bash

# GitHub 部署脚本
echo "🚀 准备部署到 GitHub Pages..."

# 检查是否在 Git 仓库中
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    git branch -M main
fi

# 检查是否有远程仓库
if ! git remote | grep -q "origin"; then
    echo ""
    echo "⚠️  还没有设置远程仓库！"
    echo ""
    echo "请运行以下命令添加远程仓库："
    echo "  git remote add origin https://github.com/YOUR_USERNAME/cyberfolio---tech-style-portfolio.git"
    echo ""
    echo "或者如果你已经创建了仓库，直接运行："
    echo "  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo ""
    read -p "按 Enter 继续，或 Ctrl+C 取消..."
fi

# 添加所有文件
echo "📝 添加文件到 Git..."
git add .

# 检查是否有更改
if git diff --staged --quiet; then
    echo "✅ 没有需要提交的更改"
else
    # 提交更改
    echo "💾 提交更改..."
    read -p "输入提交信息 (默认: Update portfolio): " commit_msg
    commit_msg=${commit_msg:-"Update portfolio"}
    git commit -m "$commit_msg"
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
if git remote | grep -q "origin"; then
    git push -u origin main
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ 代码已推送到 GitHub！"
        echo ""
        echo "📋 下一步："
        echo "1. 进入你的 GitHub 仓库页面"
        echo "2. 点击 Settings → Pages"
        echo "3. Source 选择 'GitHub Actions'"
        echo "4. 保存设置"
        echo ""
        echo "🌐 部署完成后，网站将在以下地址可用："
        echo "   https://YOUR_USERNAME.github.io/cyberfolio---tech-style-portfolio/"
        echo ""
        echo "💡 提示：如果仓库名称不同，记得修改 vite.config.ts 中的 base 路径"
    else
        echo "❌ 推送失败，请检查网络连接和权限"
    fi
else
    echo "⚠️  请先设置远程仓库"
fi

