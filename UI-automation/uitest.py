import time
from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.chrome.service import Service 

def search_on_amazon(product):
    serv_obj=Service("C:/Users/Public/chromedriver/chromedriver-win64/chromedriver.exe")
    driver=webdriver.Chrome(service=serv_obj)
    driver.get("https://www.amazon.in/")
    driver.maximize_window()
    searchbox=driver.find_element(By.ID, "twotabsearchtextbox")
    searchbox.send_keys(product)

    searchbtn=driver.find_element(By.XPATH,'//input[contains(@id,"submit-button")]')
    searchbtn.click()
    time.sleep(2)

    first_item=driver.find_element(By.XPATH,'//div[@class="a-section"]//span[contains(@class,"a-text-normal")]')
    product_name=first_item.text

    price=driver.find_element(By.XPATH,'//span[@class="a-price-whole"]')
    product_cost=price.text

    product_link=driver.find_element(By.XPATH,'//div[@class="a-section"]//span[contains(@class,"a-text-normal")]/..').get_attribute("href")

    print("ProductName : ",product_name)
    print("Product_Price : ",product_cost)
    print("Product_link : ",product_link)

    first_item.click()
    time.sleep(3)
    window_ids=driver.window_handles
    new_window=window_ids[1]

    driver.switch_to.window(new_window)

    cart_btn=driver.find_element(By.XPATH,'(//input[@id="add-to-cart-button"])[2]')
    cart_btn.click()

    buy_now=driver.find_element(By.ID,"buy-now-button")
    buy_now.click()

    time.sleep(3)
    driver.close()


product = "Apple iPhone 14"
search_on_amazon(product)

