#!/usr/bin/env python
# coding: utf-8

# In[10]:


import pymongo
import collections
import pandas as pd
import random


# In[11]:


client = pymongo.MongoClient("mongodb://localhost:27017/")
client.list_database_names()


# ### Item Catalog

# In[12]:


data = pd.read_excel("Data-of-Items_new.xlsx")
data.head()


# In[13]:


db = client['item_catalog'] # catolog of items
col = db['assets']
for index, row in data.iterrows():
    value = {
        row['item_identifier']: {
            "item_id": row['item_identifier'],
            "name": row['item_name'],
            "mrp": row['price'],
            "category": row['item_category'],
            "qr_code": "",
        }
    }
    ids = col.insert_one(value)
    print("Store ID : {}\nInserted IDS : {}".format(row['item_identifier'], ids))


# ### Store Data

# In[14]:


db = client['item_catalog'] # Store data
for key in ['store_1', 'store_2', 'store_3', 'store_4', 'store_5']:
    col = db[key]
    value = []
    for item_name in random.sample(data['item_name'].unique().tolist(), 20):
        ldict = {}
        ldict['id'] = data['item_identifier'][data['item_name'] == item_name].values[0]
        ldict['item_id'] = data['item_identifier'][data['item_name'] == item_name].values[0]
        ldict['name'] = item_name
        ldict['quantity'] = random.randint(100, 500)
        ldict['price'] = data['price'][data['item_name'] == item_name].values[0]
        ldict['category'] = data['item_category'][data['item_name'] == item_name].values[0]
        ldict['offer_id'] = ""
        ldict['qr_code'] = ""
        value.append(ldict)
    ids = col.insert_many(value)
    print("Store ID : {}\nInserted IDS : {}".format(key, ids))


# In[15]:


print("Completed Data Import!")


# In[ ]:




