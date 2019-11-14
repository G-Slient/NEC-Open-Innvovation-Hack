#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pymongo


# In[2]:


client = pymongo.MongoClient("mongodb://localhost:27017/")


# In[3]:


client.list_database_names()


# In[22]:


db = client['sample_1'] # stores


# In[23]:


# Stores Data
ldict = {
    "store_1": [
        {
        "id": "S1_1001",
        "item_id": "1001",
        "name": "Maggi Instant Noodles",
        "quantity": "200",
        "price": "12",
        "category": "Food",
        "offer_id": "",
        "qr_code": "1001",
    },
    {
        "id": "S1_1002",
        "item_id": "1002",
        "name": "Dove Soap",
        "quantity": "500",
        "price": "50",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1002",
    },
    {
        "id": "S1_1003",
        "item_id": "1003",
        "name": "Loreal Shampoo",
        "quantity": "530",
        "price": "199",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1003",
    },
    {
        "id": "S1_1004",
        "item_id": "1004",
        "name": "Dettol Handwash",
        "quantity": "25",
        "price": "200",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1004",
    },
    {
        "id": "S1_1005",
        "item_id": "1005",
        "name": "Haldirams Aloo Bhujia",
        "quantity": "210",
        "price": "165",
        "category": "Food",
        "offer_id": "",
        "qr_code": "1005",
    },
],
    "store_2": [
        {
        "id": "S2_1001",
        "item_id": "1006",
        "name": "Top Ramen Noodles",
        "quantity": "250",
        "price": "12.5",
        "category": "Food",
        "offer_id": "",
        "qr_code": "1006",
    },
    {
        "id": "S2_1002",
        "item_id": "1007",
        "name": "Head & Shoulders Shampoo",
        "quantity": "510",
        "price": "199",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1007",
    },
    {
        "id": "S2_1003",
        "item_id": "1008",
        "name": "Nivea FRESH Active Deoderent",
        "quantity": "790",
        "price": "199",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1008",
    },
    {
        "id": "S2_1004",
        "item_id": "1009",
        "name": "Nivea TALC",
        "quantity": "250",
        "price": "210",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1009",
    },
    {
        "id": "S2_1005",
        "item_id": "1010",
        "name": "Haldirams Nut CRACKER",
        "quantity": "160",
        "price": "185",
        "category": "Food",
        "offer_id": "",
        "qr_code": "1010",
    },
],
    "store_3": [
        {
        "id": "S3_1001",
        "item_id": "1002",
        "name": "Dove Soap",
        "quantity": "200",
        "price": "50",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1002",
    },
    {
        "id": "S3_1002",
        "item_id": "1003",
        "name": "Loreal Shampoo",
        "quantity": "130",
        "price": "199",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1003",
    },
    {
        "id": "S1_1003",
        "item_id": "1004",
        "name": "Dettol Handwash",
        "quantity": "125",
        "price": "200",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1004",
    },
    {
        "id": "S3_1004",
        "item_id": "1009",
        "name": "Nivea TALC",
        "quantity": "50",
        "price": "210",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1009",
    },
    {
        "id": "S3_1005",
        "item_id": "1010",
        "name": "Haldirams Nut CRACKER",
        "quantity": "260",
        "price": "185",
        "category": "Food",
        "offer_id": "",
        "qr_code": "1010",
    },
],
    "store_4": [
        {
        "id": "S4_1001",
        "item_id": "1002",
        "name": "Dove Soap",
        "quantity": "240",
        "price": "50",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1002",
    },
    {
        "id": "S4_1002",
        "item_id": "1003",
        "name": "Loreal Shampoo",
        "quantity": "167",
        "price": "199",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1003",
    },
    {
        "id": "S4_1003",
        "item_id": "1004",
        "name": "Dettol Handwash",
        "quantity": "140",
        "price": "200",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1004",
    },
    {
        "id": "S4_1004",
        "item_id": "1009",
        "name": "Nivea TALC",
        "quantity": "100",
        "price": "210",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1009",
    },
    {
        "id": "S4_1005",
        "item_id": "1010",
        "name": "Haldirams Nut CRACKER",
        "quantity": "60",
        "price": "185",
        "category": "Food",
        "offer_id": "",
        "qr_code": "1010",
    },
],
    "store_5": [
        {
        "id": "S5_1001",
        "item_id": "1001",
        "name": "Maggi Instant Noodles",
        "quantity": "120",
        "price": "12",
        "category": "Food",
        "offer_id": "",
        "qr_code": "1001",
    },
    {
        "id": "S5_1002",
        "item_id": "1010",
        "name": "Haldirams Nut CRACKER",
        "quantity": "160",
        "price": "185",
        "category": "Food",
        "offer_id": "",
        "qr_code": "1010",
    },
    {
        "id": "S5_1003",
        "item_id": "1004",
        "name": "Dettol Handwash",
        "quantity": "250",
        "price": "200",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1004",
    },
    {
        "id": "S5_1004",
        "item_id": "1009",
        "name": "Nivea TALC",
        "quantity": "500",
        "price": "210",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1009",
    },
    {
        "id": "S5_1005",
        "item_id": "1003",
        "name": "Loreal Shampoo",
        "quantity": "205",
        "price": "199",
        "category": "Cosmetics",
        "offer_id": "",
        "qr_code": "1003",
    },
]
}


# In[24]:


for key, value in ldict.items():
    col = db[key]
    ids = col.insert_many(value)
    print("Store ID : {}\nInserted IDS : {}".format(key, ids))


# In[25]:


for x in col.find():
    print(x)


# In[ ]:





# In[28]:


db = client['catolog_1'] # catolog of items
# Items Data
ldict = {
    "1001": {
        "item_id": "1001",
        "name": "Maggi Instant Noodles",
        "mrp": "12",
        "category": "",
        "qr_code": "",
        
    },
    "1002": {
        "item_id": "1002",
        "name": "Dove Soap",
        "mrp": "50",
        "category": "Cosmetics",
        "qr_code": "1002",
        
    },
    "1003": {
        "item_id": "1003",
        "name": "Loreal Shampoo",
        "mrp": "199",
        "category": "Cosmetics",
        "qr_code": "1003",
        
    },
    "1004": {
        "item_id": "1004",
        "name": "Dettol Handwash",
        "mrp": "200",
        "category": "Cosmetics",
        "qr_code": "1004",
        
    },
    "1005": {
        "item_id": "1005",
        "name": "Haldirams Aloo Bhujia",
        "mrp": "165",
        "category": "Food",
        "qr_code": "1005",
        
    },
    "1006": {
        "item_id": "1006",
        "name": "Top Ramen Noodles",
        "mrp": "12.5",
        "category": "Food",
        "qr_code": "1006",
        
    },
    "1007": {
        "item_id": "1007",
        "name": "Head & Shoulders Shampoo",
        "mrp": "199",
        "category": "Cosmetics",
        "qr_code": "1007",
        
    },
    "1008": {
        "item_id": "1008",
        "name": "Nivea FRESH Active Deoderant",
        "mrp": "199",
        "category": "Cosmetics",
        "qr_code": "1008",
        
    },
    "1009": {
        "item_id": "1009",
        "name": "Nivea TALC",
        "mrp": "210",
        "category": "Cosmetics",
        "qr_code": "1009",
        
    },
    "1010": {
        "item_id": "1010",
        "name": "Haldirams Nut CRACKER",
        "mrp": "185",
        "category": "Food",
        "qr_code": "1010",
       
    },
}


# In[30]:


for key, value in ldict.items():
    col = db[key]
    ids = col.insert_one(value)
    print("Store ID : {}\nInserted IDS : {}".format(key, ids))


# In[ ]:




