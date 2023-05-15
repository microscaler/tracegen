# tracegen
Trace generator


# Running app
node -r './oteltrace.js' app.js

# Running with Docker
docker run -d -v ~/mypath/otelcol_config.yaml:/otel-local-config.yaml -p 14268:14268 -p 4317-4318:4317-4318 -p 55680-55681:55680-55681 microscaler/tracegen --config /otel-local-config.yaml
