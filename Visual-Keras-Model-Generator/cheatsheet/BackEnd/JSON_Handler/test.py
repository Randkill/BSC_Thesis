import json

f = open('data.json') 
# returns JSON object as  
# a dictionary 
data = json.load(f)   
f.close()  

layers = data.get('layers')

modelConfig = data.get('ModelConfig')

print('Layers : \n', layers, '\nModelConfig: \n', modelConfig)
print('lenght of layers:', len(layers))
output = 'model = sequential()'

lys = []
for i in range(0, len(layers)):
    data = 'model.add(Dense(' + layers[i].get('neurons')+ ', activation="'+ layers[i].get('activationFunction')+ '"))'
    lys.append(data)
    print(lys[i])


config = 'model.compile(loss="'+modelConfig.get('lossFunction')+ '", optimizer="' + modelConfig.get('optimizer') + '", metrics=["' + modelConfig.get('metrics') + '"])'



print(lys[0], '\n', lys[1], '\n', config)