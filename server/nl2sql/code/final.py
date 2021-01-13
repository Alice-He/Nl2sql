import torch
from sqlnet.utils import *
from sqlnet.model.sqlbert import SQLBert, BertTokenizer
import argparse
import time 
import os.path as osp

if __name__ == '__main__':
    #命令行参数
    parser = argparse.ArgumentParser()
    
    #前端传入参数
    table_id =
    question =
    
    #载入模型和分词器
    tokenizer = BertTokenizer.from_pretrained(bert_model_dir, do_lower_case=True)
    model = SQLBert.from_pretrained(bert_model_dir)
    model.load_state_dict(torch.load(restore_model_path))
    
    #开始运行
    print("Start to predict test set")
    predict_test(model, batch_size, test_sql, test_table, result_path, tokenizer=tokenizer)
    
    