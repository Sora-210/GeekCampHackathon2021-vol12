# APIのアップデート内容ログ
___
## 2.0.0 => 3.0.0
#### [WARNING] 互換性のない更新
- __認証系APIの廃止__  
認証処理をFirebaseに移動したことによる影響
- __認証に関連したモデルの削除__  
認証処理をFirebaseに移動したことによる影響 
- __[get] limit, pagesの導入__  
一部[get]について取得上限(limit),取得するページ数(pages)をしていることが出来るようになりました
___
## 1.0.0 => 2.0.0
#### [WARNING] 互換性のない更新
- __[get] /targets/{userId} の廃止__  
代替え: [get] /targets にてクエリーuserIdを指定することで絞り込み検索が可能です  

- __[get] /logs/{userId} の廃止__  
代替え: [get] /targets にてクエリーuserIdを指定することで絞り込み検索が可能です  
なお,他要素に対しても指定がある場合AND検索になります  
- __[get] /logs/{targetId} の廃止__  
代替え: [get] /targets にてクエリーtargetIdを指定することで絞り込み検索が可能です  
なお,他要素に対しても指定がある場合AND検索になります  
- __[post] /logs/{targetId} の廃止__  
代替え: [post] /targets にてリクエストボディtargetIdを指定することで目標に対する行動が登録可能です  
- __[get] /logs/{logId} の追加__  
指定IDの行動情報を取得します  
___