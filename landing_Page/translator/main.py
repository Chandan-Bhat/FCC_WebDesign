from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os, pyperclip, time
import json

os.environ["PATH"] += r";.\selenium_Driver"
#print(os.environ["PATH"])
options = webdriver.ChromeOptions()
#options.add_argument("--headless")

#removing warning msgs
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(options=options)
driver.get("https://translate.google.co.in/?hl=en&tab=TT&sl=en&tl=es&op=translate")

#retriving data
fHandle = open("../json/en.json")
data = json.load(fHandle)

driver.implicitly_wait(4)  #only waits if the assest hasnt loaded yet, this stmt will be applied to all element selector stmts

wait = WebDriverWait(driver, 10)
source = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'textarea[aria-label="Source text"]')))
source.click()

for key, val in data.items():
    source.clear()
    source.send_keys(val)

    time.sleep(6)

    btn = WebDriverWait(driver, 3).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, 'button[aria-label ="Copy translation"]'))
    )
    time.sleep(1)
    btn.click()
    data[key] = pyperclip.paste()
    time.sleep(2)
    #print(data[key])

driver.quit()

json_object = json.dumps(data, indent=4)
 
# Writing to sample.json
with open("../json/es.json", "w") as outfile:
    outfile.write(json_object)