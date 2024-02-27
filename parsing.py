import requests
from bs4 import BeautifulSoup
import json

url = 'https://ocean-furniture.satu.kz/g8616262-stulya'

products = []

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
script_tags = soup.find_all('script', {'type': 'application/ld+json'})

for tag in script_tags:
    product_data = json.loads(tag.string)
    product_info = {
        'name': product_data.get('name'),
        'price': product_data['offers']['price'] if 'offers' in product_data else None,
        'url_of_image': product_data.get('image'),
        'product_url': product_data['offers']['url'] if 'offers' in product_data else None
    }
    products.append(product_info)

with open('products_data_stulya.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=4)

print("Data collection from the first page is complete and saved to products_data_stulya.json")
