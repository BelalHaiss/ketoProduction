FROM ubuntu:18.04

RUN apt update -y \
    && apt install nginx curl vim -y \
    && snap install core; sudo snap refresh core \
    && sudo apt-get remove certbot \
    && sudo snap install --classic certbot \
    && sudo certbot --nginx \


    # && apt-get install software-properties-common -y 
    # && add-apt-repository ppa:certbot/certbot -y \
    # && apt-get update -y \
    # && apt-get install python-certbot-nginx -y \
    # && apt-get clean

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]