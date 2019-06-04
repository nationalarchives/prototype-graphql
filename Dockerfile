FROM node:12-alpine
WORKDIR tdr-graphql
COPY ./ /tdr-graphql
ENV CI true
RUN wget https://raw.githubusercontent.com/eficode/wait-for/master/wait-for && chmod +x wait-for
CMD ./wait-for mysql:3306 -- yarn test