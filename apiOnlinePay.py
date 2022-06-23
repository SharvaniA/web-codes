import requests
amount = input("Enter amount: ")
firstname = input("Enter Username: ")
email = input("Enter emailId: ")
phone = input("Enter phone: ")
productinfo = input("Enter productinfo: ")

url = "https://test.payu.in/_payment"
payload = "key=JP***g&txnid=xTDLnzBoT8jGHI&amount="+amount+"&firstname="+firstname+"&email="+email+"&phone="+phone+"&productinfo="+productinfo+"&pg=&bankcode=&surl=https://apiplayground-response.herokuapp.com/&furl=https://apiplayground-response.herokuapp.com/&hash=92f919d94d3c5578bb1f80ee4b25e78e6e12bd05b2f6cbf927777eb5be712d121b91080a8b16e0c0f69099f4d324c55578d213bad607a5fd1a21ce0afff3bf39"
headers = { "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded" }
response = requests.request("POST", url, data=payload, headers=headers, params=querystring)
print(response.text)