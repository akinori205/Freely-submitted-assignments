#GoogleColaboratory セル1
from sklearn.datasets import make_blobs #sklearnのmake_blobsをインポート
import pandas as pd                     #pandasをインポート

X, y = make_blobs(                      
    random_state=3,                     #データセット作成時の乱数生成を決定:３回
    n_features=2,                       #各サンプルの特徴の数:２
    centers=2,                          #生成する中心の数:２
    cluster_std=1,                      #クラスターの標準偏差:１
    n_samples=300                       #点の数:３００
)

#特徴量(X)でデータフレームを作成し、分類(y)をtargetとして追加
df = pd.DataFrame(X)                    #データフレームの作成
df["target"] = y                        #yをtarget列に
df.head()

#GoogleColaboratory セル2
%matplotlib inline                      #JupyterNotebookで必要なコード。グラフ等を表示するために必要
import matplotlib.pyplot as plt         #matplotlibをインポート
#分類によって、別々のデータフレームに分ける
df0 = df[df["target"]==0]               #セル１の表で "target" の軸が０ならdf0
df1 = df[df["target"]==1]               #セル２の表で "target" の軸が１ならdf1
#分類０は青、分類１は赤で散布図を作成
plt.figure(figsize=(5,5))
plt.scatter(df0[0],df0[1],color="b",alpha=0.5)
plt.scatter(df1[0],df1[1],color="r",alpha=0.5)
plt.grid()
plt.show()