# このリポジトリについて
このリポジトリは参照や学習目的で公開されています。  
変更提案（Pull Request）や Issue の作成は受け付けておりません。  
<br>
<br>

# My Theme の概要
Bootswatch のテーマを気分に応じて容易に切り替えたいと思い、[Starterkit documentation](https://www.drupal.org/docs/core-modules-and-themes/core-themes/starterkit-theme) をもとに Drupal のカスタムテーマ「My Theme」を作ってみました。  
ヘッダー、左サイドバー、コンテナー、右サイドバー、フッターのオーソドックスな3列スタイルです。  
Drupal 11.1.5 で動作確認済みです。  
<br>
<br>

# 管理画面から変更できる要素
管理画面のメニュー「テーマ」＞「テーマの設定」から次の変更が可能です。

- Bootswatch テーマの選択（25種類）
- コンテナタイプの選択（固定長、可変長）
- ナビゲーションバータイプの選択（Primary、Light、Dark、透過）
- サイトロゴやタイトルの水平位置（左寄せ、中央寄せ）
- メインナビゲーションなどヘッダー要素の水平位置（左寄せ、中央寄せ、右寄せ）
- カスタム CSS の適用  
<br>
<br>

# インストールとアップデート（git コマンドを使用する場合）
## 新規インストール

1. サイトへのアクセス:  
Drupal サイトにログインして web/themes/ 等に移動します。

2. リポジトリの作成:  
次のコマンドで Drupal サイトにローカルリポジトリを作成します。ディレクトリ名は必ず ***my_theme*** としてください。

```
git clone https://github.com/DrupalMyTheme/MyTheme.git my_theme
```

3. キャッシュのクリア:  
Drupal のキャッシュをクリアします。これを行わないと、新しいテーマが認識されない場合があります。
Drupal の管理画面から: 管理メニューの「パフォーマンス」にアクセスし、「すべてのキャッシュをクリア」ボタンをクリックします。
Drushを使用する場合: Drushがインストールされている場合は、以下のコマンドを実行します。

```
drush cr
```

4. テーマの有効化:  
Drupal の管理画面にログインし、メニュー「テーマ」をクリックしてテーマのページにアクセスします。新しく追加された my_theme が表示されているはずです。
「インストールして有効化」または「有効化」ボタンをクリックして、テーマを有効にします。

<br>

## アップデート

1. Drupal サイトをメンテナンスモードにする:  
Drupal サイトの管理画面から Drupal サイトをメンテナンスモードにします。

2. サイトへのアクセス:  
ssh 等で Drupal サイトにログインして my_theme のあるディレクトリ（web/themes/ や web/themes/custom/ 等）に移動します。

3. 既存テーマディレクトリのリネームまたは削除:  
古いバージョンのテーマディレクトリ ( my_theme ) をリネームするか、削除します。
削除する場合は、テーマに関連する設定やカスタマイズが失われる可能性があるため、事前にバックアップを取っておくことを強く推奨します。
リネームする場合は、例えば my_theme_old のように名前を変更します。

4. 新しいリポジトリの作成:  
次のコマンドで Drupal サイトに新しいローカルリポジトリを作成します。

```
git clone https://github.com/DrupalMyTheme/MyTheme.git my_theme
```

5. キャッシュのクリア:  
Drupal のキャッシュをクリアします。これを行わないと、新しいテーマが認識されない場合があります。
Drupal の管理画面から: 管理メニューの「パフォーマンス」にアクセスし、「すべてのキャッシュをクリア」ボタンをクリックします。
Drushを使用する場合: Drushがインストールされている場合は、以下のコマンドを実行します。

```
drush cr
```

6. 必要に応じて設定の移行:  
テーマの設定や style.css 等のカスタマイズしたファイルを移行する必要がある場合は、手動で移行します。

7. Drupal サイトのメンテナンスモードを解除する:  
Drupal サイトの管理画面から Drupal サイトのメンテナンスモードを解除します。

<br>

> [!TIP]
> `git reset --hard` を使う方法もあります。

<br>
<br>


# インストールとアップデート（テーマファイルをアップロードする場合）
## 新規インストール

1. テーマファイルのダウンロード:  
MyTheme-main.zip をダウンロードします。

2. Drupal サイトへのアクセス:  
FTP、SFTP、またはサーバーのファイルマネージャーなどを利用して、Drupal サイトのファイルシステムにアクセスします。

3. テーマファイルのアップロード:  
ダウンロードした MyTheme-main.zip を、Drupal のテーマディレクトリにアップロードします。テーマディレクトリのパスは通常 web/themes、web/themes/custom または themes 等です。
Drupal のインストール方法や構成によっては異なる場合がありますので、不明な場合は Drupal のインストールディレクトリを確認してください。

4. テーマファイルの展開と名称変更:  
アップロードした MyTheme-main.zip を展開した後、ディレクトリ名を my_theme に変更します。サーバーのコマンドラインが使える場合は、以下のコマンドを使用します。

```
unzip MyTheme-main.zip
mv ./MyTheme-main ./my_theme
```

コマンドラインが使えない場合は、FTPクライアントやファイルマネージャーの展開機能を使用します。展開すると、MyTheme-main というディレクトリが作成されるはずなので、ディレクトリ名を my_theme に変更します。

5. キャッシュのクリア:  
Drupal のキャッシュをクリアします。これを行わないと、新しいテーマが認識されない場合があります。
Drupal の管理画面から: 管理メニューの「パフォーマンス」にアクセスし、「すべてのキャッシュをクリア」ボタンをクリックします。
Drushを使用する場合: Drushがインストールされている場合は、以下のコマンドを実行します。

```
drush cr
```

6. テーマの有効化:  
Drupal の管理画面にログインし、メニュー「テーマ」をクリックしてテーマのページにアクセスします。新しく追加された my_theme が表示されているはずです。
「インストールして有効化」または「有効化」ボタンをクリックして、テーマを有効にします。

<br>

## アップデート
既存のテーマをアップデートする場合は、上記の手順に加えて、サイトをメンテナンスモードに変更して実行するとともに、以下の点に注意してください。

1. 既存テーマディレクトリのリネームまたは削除:  
古いバージョンのテーマディレクトリ ( my_theme ) をリネームするか、削除します。
削除する場合は、テーマに関連する設定やカスタマイズが失われる可能性があるため、事前にバックアップを取っておくことを強く推奨します。
リネームする場合は、例えば my_theme_old のように名前を変更します。

2. 新しいテーマファイルの展開:  
新しいバージョンの my_theme.zip を展開します。

3. 必要に応じて設定の移行:  
テーマの設定や style.css 等のカスタマイズしたファイルを移行する必要がある場合は、手動で移行します。

<br>

## トラブルシューティング
- テーマが認識されない場合は、キャッシュのクリアを再度試してください。
- エラーが発生する場合は、Drupal のエラーログを確認してください。エラーログは通常 web/sites/default/files/php または sites/default/files/php にあります。
- テーマの依存関係が不足している場合は、エラーメッセージが表示されます。不足しているライブラリやモジュールを手動でダウンロードしてインストールする必要があります。