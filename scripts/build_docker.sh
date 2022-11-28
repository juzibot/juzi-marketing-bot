#!/usr/bin/env bash
set -e

imageName='juzi-marketing-bot'
ECR_URL=789252305933.dkr.ecr.cn-northwest-1.amazonaws.com.cn
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo current package version: "$PACKAGE_VERSION"

npm run build

echo docker build -t "$imageName":"$PACKAGE_VERSION" .
docker build -t "$imageName":"$PACKAGE_VERSION" .

# aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_URL
# $(aws ecr get-login --no-include-email --region cn-northwest-1)

echo docker tag "$imageName":"$PACKAGE_VERSION" $ECR_URL/"$imageName":"$PACKAGE_VERSION"
docker tag "$imageName":"$PACKAGE_VERSION" $ECR_URL/"$imageName":"$PACKAGE_VERSION"

echo docker push $ECR_URL/"$imageName":"$PACKAGE_VERSION"
docker push $ECR_URL/"$imageName":"$PACKAGE_VERSION"
