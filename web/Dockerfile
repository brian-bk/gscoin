FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /usr/share/nginx/html/index.html

ADD proxy_params /etc/nginx/proxy_params
ADD gscoin.conf /etc/nginx/nginx.conf
