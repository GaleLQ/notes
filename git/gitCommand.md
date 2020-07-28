```
    // git版本2.25.2测试过

    // 配置相关
    git config --global user.name "username"               // 全局配置用户名,无--global只在本地仓库有效
    git config --global user.email "useremail"             // 配置邮箱
    git config --list                                      // 查看配置
    ssh-keygen -t rsa -C "email"                           // 生成秘钥
    git init                                               // 初始化一个git仓库
    git clone url myprojectname                            // 克隆代码到本地(可重命名)
    // 工作区和暂存区
    git status                                             // 查看工作区和暂存区与本地版本库不一样的文件变化
    git add [filename] [dir] [.]                           // 将文件，文件夹，当前所有添加到暂存区
    git rm [filename] [dir] [.] -r                         // 从工作区和暂存区删除文件,文件夹
    git rm --cached [filename] [dir] [.] -r                // 从暂存区删除文件(文件夹)，工作区不删
    git reset HEAD [filename] [dir] [.]                    // 将暂存区的文件(文件夹)恢复到工作区
    git checkout [filename] [dir] [.]                      // 将工作区的文件(文件夹)恢复到原始版本库
    git diff [filename] [dir] [.]                          // 查看工作区与暂存区之间的文件变化
    git diff commitId [filename] [dir] [.]                 // 查看工作区与指定版本库之间的文件变化
    git diff --cached (commitId) [filename] [dir] [.]      // 查看暂存区与(指定)版本库之间的文件变化
    git stash                                              // 将当前git追踪内的改动(工作和暂存区，无新建文件)加入隐藏栈
    git stash list                                         // 查看
    git stash pop                                          // 应用移除
    git stash apply                                        // 应用不移除
    git stash drop                                         // 移除
    git commit -m "message"                                // 将暂存区添加到版本库(-am是将已追踪的自动add)
    git log [-p] [-2]                                      // 查看历史commit, -p附带每次文件改变, -n只显示前n次
    git log --graph                                        // 并查看分支图
    // 版本库和远程
    git remote -v                                          // 显示远程库信息
    git remote add remote-name address                     // 关联远程库
    git fetch [remote-name [remoteBranchName[:localBranchName]]] // 拉取远程所有或指定分支(作为本localBranchName),不合并
    git pull [remote-name [remoteBranchName[:localBranchName]]] // 拉取且合并
    git push remote-name localBranchName:remoteBranchName // 将本地推送到远程
    git push origin :remoteBranchName(git push origin -d remoteBranchName) // 删除远程分支
    git push -u origin localBranchName                    // 关联且推送分支到远程(适合第一次)
    git remote show remote-name                           // 查看远程本地分支相关信息
    git remote prune remote-name                          // 删除本地在远程已经被删除的无用分支
    git remote rm origin                                  // 切断与远程的连接关系

    // 分支管理
    git branch                                             // 查看本地分支
    git branch -r                                          // 查看远程分支
    git branch -a                                          // 查看所有分支
    git branch branchName                                  // 创建分支
    git checkout branchName                                // 切换分支
    git checkout -b branchName [fromBranchName]            // 创建切换分支(根据当前或指定分支)
    git branch -d branchName                               // 删除分支(必须已合并过的)
    git branch -D branchName                               // 强制删除分支
    git branch -u remote-name/remoteBranchName localBranchName // 关联远程分支
    git merge otherBranchName(remote-name/branchName)      // 将其他与当前分支合并(保留commit)
    git rebase rebase-branch branchName                    // 拉取分支最新的代码做基,变基合并，减少commit记录(注意多人操作丢失记录)
    git rebase --continue                                  // 如有冲突时相当于更改后的commit
    git rebase —abort                                      // 恢复到rebase之前的状态
    git reset --mixed commitId                             // 恢复到相应的commit版本,所有的改动放在工作区，暂存区的也放回工作区(默认可省略--mixed)
    git reset --soft commitId                              // 恢复到相应的commit版本,所有的改动放在暂存区
    git reset --hard commitId                              // 恢复到相应的commit版本,所有的改动丢弃

    git tag tagName                                        // 在当前版本库打标签
    git tag                                                // 查看标签
    git tag -d tagName                                     // 删除标签
    git push origin --tags                                 // 将标签推送至远程(默认只在本地)

```

### others
#### 配置全局.gitignore
- 根目录下.*gitconfig*文件添加
  ```bash
  [core]
  excludesfile = /Users/gale/.gitignore
  ```