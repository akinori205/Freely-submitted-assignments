//最低限のコメントしか書かないのでわからない単語があれば検索したらそこらへんに出てくるので、それで理解してください
const ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty('ACCESS_TOKEN'); //GoogleAppsScriptのプロパティーに設定したアクセストークンを取得する。
const LINE_URL = 'https://api.line.me/v2/bot/message/reply';

function doPost(e)
{
//LINEBotにメッセージが来ると、以下のコードが呼ばれる

	//送られてきたメッセージの取り出し
	const json = JSON.parse(e.postData.contents);
	const data = json.events[0]

	//関数createReplyMessageで作った返信メッセージを変数messageに代入
	const message = createReplyMessage(data.message.text)

	//返信メッセージの構築
	const option = {
		'headers': {
			'Content-Type': 'application/json; charset=UTF-8',
			'Authorization': 'Bearer' + ACCESS_TOKEN,
		},
		'method': 'post',
		'payload': JSON.stringify({
			'replyToekn': data.replyToken,
			'messages':[{
				"tyep": "text",
				"text": message,		//変数メッセージをoptionの戻り値として設定
			}],
		}),
	}

	//LINE_URLに変数optionで設定した返信メッセージを送る
	UrlFetchApp.fetch(LINE_URL,option);
}

function createReplyMessage(receivedMessage){

	//「おはよう」ときたら「おはようございます」と返す
	if(receivedMessage == "おはよう"){
		return "おはようございます"
	}

	//「おやすみ」ときたら「おやすみなさい」と返す
	if(receivedMessage == "おやすみ"){
		return "おやすみなさい"
	}

	//「今日の天気は」ときたら今日の天気を返す
	if(receivedMessage == "今日の天気は"){
		//HTTPSクライアント用のクラス。WebAPIへ接続
		const result = UrlFetchApp.fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json')
		
		//取ってきたデータをJSON形式にかえる
		const weatherJSON = JSON.parse(result);

		//weatherJSONのJSONデータにある天気を取り出す
		const weather = weatherJSON[0].timeSeries[0].areas[0].weathers[0]
		return weather
	}

	//以下同文
	if(receivedMessage == "明日の天気は"){
		const result = UrlFetchApp.fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json')
		const weatherJson = JSON.parse(result);

		const weather = weatherJSON[0].timeSeries[0].areas[0].weathers[1]
		return weather
	}

	if(receivedMessage == "明後日の天気は"){
		const result = UrlFetchApp.fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json')
		const weatherJson = JSON.parse(result);

		const weather = weatherJSON[0].timeSeries[0].areas[0].weathers[2]
		return weather
	}

	//上記以外のメッセージには以下の言葉を返す
	else{
		const nothing = "今後その言葉に返信できるかも...？"
		return nothing
	}
}