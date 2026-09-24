#!/bin/bash
echo "[1] WHOIS..."
whois $1 | grep -E "Creation|Registrar"
echo "[2] DIG..."
dig +short $1
echo "[3] SERVER..."
curl -I https://$1 2>&1 | grep -E "HTTP|server"
echo "✅ Bincike ya kammala!"
