#!/bin/bash
RELEASE_BRANCH=`git symbolic-ref --short -q HEAD`

verify_release_branch() {
  if [ "$RELEASE_BRANCH" == "main" ]
  then
    echo `当前处于${RELEASE_BRANCH}分支`
  else
    echo `只能在 main 分支执行发布`
  fi
}

verify_local_clean() {
  if [ -n "$(git status --porcelain)" ]
  then
    echo "本地存在未提交的代码"
  fi
}

push() {
  git add .
  git commit -m "ci: release"
  git push origin $RELEASE_BRANCH
  echo "已提交到 origin/$RELEASE_BRANCH"
}

verify_local_clean
verify_release_branch
push


exit 0