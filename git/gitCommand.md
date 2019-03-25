```
    git config --global user.name "username"               // 全局配置用户名,无global只在本地仓库有效
    git config --global user.email "useremail"             // 配置邮箱
    ssh-keygen -t rsa -C "email"                           // 生成秘钥
    git init                                               // 初始化一个git仓库
    git add filename1 filename2                            // 将filename添加到暂存区
    git add -A                                             // 将所有修改添加到暂存区
    git add .                                              // 将当前及子目录修改添加到暂存区（1.x版本不监听删除）
    git commit -m "message"                                // 将暂存区添加到版本库
    git status                                             // 查看工作区,暂存区的变化状态
    git diff <filename>                                    // 查看工作区与暂存区或版本库的差别
    git diff <commit> <filename>                           // 版本库与工作区
    git --cached <filename>                                // 暂存区与工作区
    git log                                                // 查看历史commitId
    git log --graph                                        // 并查看分支图
    git reset --hard commitId                              // 恢复到相应的commit版本
    git reflog                                             // 查看reset和commit历史操作的commitId
    git checkout -- filename                               // 丢弃文件的修改恢复成暂存区或版本库
    git reset HEAD filename                                // 暂存区的修改恢复到工作区
    git clone address                                      // 克隆代码到本地
    git remote add origin address                          // 关联远程库
    git branch -u origin/remoteBranchName localBranchName  // 关联远程分支
    git pull                                               // 从远程库拉代码并合并
    git fetch origin remoteBranchName:tempBranchName       // 抓取远程最新分支到临时
    git fetch                                              // 所有远程最新更新到本地,不merge
    git fetch origin remoteBranchName                      // 特定远程分支更新
    git push -u origin currentBranchName                   // 推送创建关联分支(适合第一次)
    git push origin localBranchName:remoteBranchName       // 本地推到远程
    git push                                               // 推送到关联库
    git checkout -b branchName                             // 创建切换至分支
    git checkout -b branchName origin/branchName           // 在远程库基础创建并切换
    git branch branchName                                  // 创建分支
    git checkout branchName                                // 切换分支
    git branch                                             // 查看本地分支
    git branch -r                                          // 查看远程分支
    git branch -a                                          // 查看所有分支
    git remote show origin                                 // 查看远程本地分支相关
    git remote prune origin                                // 删除远程删除的无用分支
    git merge otherBranchName                              // 将其他与当前分支合并(不保留历史)
    git merge --no-ff -m "message" otherBranchName         // 保留合并分支历史
    git branch -d branchName                               // 删除分支(已合并)
    git branch -D branchName                               // 强制删除分支
    git stash                                              // 将工作区和暂存区的所有改动放入栈中
    git stash list                                         // 查看栈
    git stash pop                                          // 恢复栈改动
    git remote -v                                          // 显示远程库信息
    git rebase                                             // 整理历史分支
    git tag tagName                                        // 在当前版本库打标签
    git tag                                                // 查看标签
    git tag -d tagName                                     // 删除标签
    git push origin --tags                                 // 将标签推送至远程(默认只在本地)
    git remote rm origin                                   // 切断与远程的连接关系
    git push origin -d remoteBranchName                    // 删除远程分支
    git push origin :remoteBranchName                      // 同上
```