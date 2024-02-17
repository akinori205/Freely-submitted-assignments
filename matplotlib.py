#GoogleColaboratory セル1
from sklearn.datasets import make_blobs
import pandas as pd

X, y = make_blobs(
    random_state=3,
    n_features=2,
    centers=2,
    cluster_std=1,
    n_samples=300
)

df = pd.DataFrame(X)
df["target"] = y
df.head()

#GoogleColaboratory セル2
%matplotlib inline
import matplotlib.pyplot as plt
df0 = df[df["target"]==0]
df1 = df[df["target"]==1]
plt.figure(figsize=(5,5))
plt.scatter(df0[0],df0[1],color="b",alpha=0.5)
plt.scatter(df1[0],df1[1],color="r",alpha=0.5)
plt.grid()
plt.show()