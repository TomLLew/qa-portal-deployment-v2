FROM jboss/keycloak:6.0.1
WORKDIR /opt/jboss/keycloak/bin
COPY ./exported_realms ./exported_realms

WORKDIR /opt/jboss/keycloak/bin/exported_realms/

#ENTRYPOINT /opt/jboss/keycloak/bin/standalone.sh -b 0.0.0.0
ENTRYPOINT /opt/jboss/keycloak/bin/exported_realms/Setup.sh
