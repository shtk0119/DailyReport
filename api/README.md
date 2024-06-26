#### ※docker起動時は、apiのコンテナから起動すること。
#### ※docker停止時は、clientのコンテナから停止すること。

## 起動
**イメージ構築&コンテナ作成&コンテナ起動**
```
sail up -d --build

./vendor/bin/sail up -d --build
```
|オプション|意味|
| ----- | ----- |
|-d     |バックグラウンドでコンテナを実行|
|--build|コンテナを開始前にイメージを構築する(composeやdockerfileに変更があった場合のみ)|

**起動確認**
```
docker compose ps

docker ps
```

**コンテナ内へ入る**
```
docker compose exec <サービス名> bash

docker container exec -it <コンテナ名 or コンテナID> bash

docker exec -it <コンテナ名 or コンテナID> bash
```
|オプション|意味|
| ----- | ----- |
|-i     |標準入力を開き続ける。|
|-t     |疑似ttyを割りあてる。|
|-it    |手元の環境で、docker内入力ができるようにする。|

**コンテナ内から出る**
```
exit
```

## 停止
**コンテナ停止/削除**
```
sail down

./vendor/bin/sail　down
```

**コンテナ&ボリューム削除**
```
sail down -v

./vendor/bin/sail　down -v
```
**※データを削除したい場合に使用。データベースに保存されているデータが全て削除されるので注意。**

**コンテナ&ボリューム&イメージ削除**
```
sail down --rmi all -v

./vendor/bin/sail　down --rmi all -v
```
|オプション|意味|
| ----- | ----- |
|--rmi  |削除するイメージの種類を指定する。（allはすべてのイメージ）|
|-v|名前付きボリュームが削除される。|
