## 中文转SQL
[阿里天池首届中文NL2SQL挑战赛](https://tianchi.aliyun.com/competition/entrance/231716/introduction) 

### Environments
centos 7

Python: 3.8

Pytorch: 1.3 

CUDA: 9.0

### Required packages
We used [pytorch-pretrained-bert](https://pypi.org/project/pytorch-pretrained-bert/) package for backbone BERT model. 

(**Note that** the original [pytorch-pretrained-bert](https://pypi.org/project/pytorch-pretrained-bert/) was updated to [pytorch-transformers](https://github.com/huggingface/pytorch-transformers) during the contest, but we chose to stick to the old version for stability.)

Required Python packages:
```
fuzzywuzzy==0.17.0
numpy==1.17.0
torch==1.3
pytorch-pretrained-bert==0.6.2
tqdm==4.24.0
records 
```
Command to install the required python packages:
```
pip install -r requirements.txt
```

### [Train/Test](code/README.md)

