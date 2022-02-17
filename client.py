import socket
import sys

try:
    s = socket.socket()
except socket.error:
    print('Failed to create socket')
    sys.exit()

s.connect(("127.0.0.1", 12345))

print('# Sending data to server')
request = b"321354564\r\n\r\n"

try:
    s.sendall(request)
except socket.error:
    print('Send failed')
    sys.exit()

print("end")




