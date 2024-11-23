import http.server
import socketserver

# 設定伺服器的連接埠
PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

# 啟動本機伺服器
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"伺服器已啟動，請訪問 http://localhost:{PORT}")
    httpd.serve_forever()
