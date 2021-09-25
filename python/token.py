import requests
import os

def Login(email, password):
    data={'email': email, 'password': password, 'undelete': "false"}
    headers={'content-type': "application/json", 'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"}
    r = requests.post('https://discord.com/api/v8/auth/login', json=data, headers=headers)
    if r.status_code == 200:
        token = r.json()['token']
        print('\u001b[32m>\u001b[37m Token: %s' % (token))
        print('\n\u001b[31m>\u001b[37m Successfully Fetched Token')
        os.system('pause >NUL')
        os._exit(0)
    elif "PASSWORD_DOES_NOT_MATCH" in r.text:
        print('\u001b[32m>\u001b[37m Invalid Password')    
        os.system('pause >NUL')
        os._exit(0)
    elif "captcha-required" in r.text:
        print('\u001b[32m>\u001b[37m Discord Returned Captcha, Try Again Later')   
        os.system('pause >NUL')
        os._exit(0) 
    else:
        print('\u001b[32m>\u001b[37m An Error Has Occured')
        os.system('pause >NUL')
        os._exit(0)

if __name__ == "__main__":
    os.system('cls & title [Discord Token Fetcher] By Dropout ^| Main Menu')
    email = input('\u001b[31m>\u001b[37m Email\u001b[31m:\u001b[37m ')
    password = input('\u001b[31m>\u001b[37m Password\u001b[31m:\u001b[37m ')
    print()
    Login(email, password)
