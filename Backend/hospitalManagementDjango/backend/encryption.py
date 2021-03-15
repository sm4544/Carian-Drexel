from cryptography.fernet import Fernet

SECRET_KEY = "hkBxrbZ9Td4QEwgRewV6gZSVH4q78vBia4GBYuqd09SsiMsIjH"
FERNET_KEY = b'Jbx7Zr2pQ3YgKei404YLNqS_fx_mmUPHd-ryjDGg2wM='


def encrypt(plain_text):
    cipher_suite = Fernet(FERNET_KEY)
    encrypted_text = cipher_suite.encrypt(str.encode(plain_text))
    return encrypted_text.decode('utf-8')
#
#
# def decrypt(encrypted_text):
#     cipher_suite = Fernet(FERNET_KEY)
#     return cipher_suite.decrypt(str.encode(encrypted_text)).decode('utf-8')
