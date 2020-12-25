import json

f = open('data.json') 
# returns JSON object as  
# a dictionary 
data = json.load(f)   
f.close()  

layers = data.get('layers')

modelConfig = data.get('ModelConfig')
config = 'model.compile(loss="'+modelConfig.get('lossFunction')+ '", optimizer="' + modelConfig.get('optimizer') + '", metrics=["' + modelConfig.get('metrics') + '"])'


#print('Layers : \n', layers, '\nModelConfig: \n', modelConfig)
#print('lenght of layers:', len(layers))
output = 'model.sequential()'
finalModel = ''
finalModel = finalModel + output

lys = []
for i in range(0, len(layers)):
    data = 'model.add(Dense(' + layers[i].get('neurons')+ ', activation="'+ layers[i].get('activationFunction')+ '"))'
    lys.append(data)
    #print(lys[i])
    finalModel = finalModel + '\n' + lys[i]

finalModel = finalModel + '\n' + config

print(finalModel)

text_file = open("answer.txt", "w")
n = text_file.write(finalModel)
text_file.close()