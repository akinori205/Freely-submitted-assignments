# 情報Ⅰ
## 提出物内容
### pythonのソースコードコード
- 発表で使用したグラフを表示したソースコード（参考文献はPowerPointの通り）
    - GoogleColaboratoryかAnaconda以外で行うと実行されないので注意してください
### LINEBot
- 超簡単に作れる「おはよう」と送ると「おはようございます」と、「おやすみ」と送ると「おやすみなさい」と帰ってきます
    - もちろんそれで終わるわけもなく、天気を聞くこともできます(もちろん予報ですので間違ってることもあります)
### LINEBotで返信が返ってくるワード
- 「おはよう」
    - 「おはようございます!」と帰ってきます
- 「おやすみ」
    - 「おやすみなさい」と帰ってきます
- 「今日の天気は」
    - その日の天気の予測が返ってきます(明日、明後日も同様)
- 「 1d10 」または「 1d100 」
    - 十面ダイスまたは百面ダイスを振った結果が表示されます
- 「 2d10 」または「 2d100 」
    - 上記の処理を二回行いそれを足し合わせた結果を表示します
- その他
    - 「今後その言葉に返信できるかも...?」と帰ってきます
### このREADMEファイル
- 簡単とは言えどこれも自分で記述しているものになるので採点よろしくお願いします
## 注意点
-　このレポジトリはあくまでも課題を提出する用に作り公開しているものになります
- 「pythonコードが実行できない」
    - GoogleColaboratoryまたはanacondaで実行していますか？それ以外では実行することはできません。
- 「LINEBotで帰ってきた天気がなぜあんなにスペースだらけなのか」
    - それは僕ではなく気象庁に聞いてください。気象庁の公開されているJSONファイルからとってきているので、下記URLを参照ください。
    - (https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json)
-　またこのREADMEも提出物なので採点よろしくお願いします。