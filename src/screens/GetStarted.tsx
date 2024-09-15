import { TouchableOpacity, View, Text, Image } from "react-native";

import Van from '../assets/Van.png'

export function GetStarted() {
  return(
    <View className="flex-1 mt-20 items-center">
      <View className="items-center">
        <TouchableOpacity>
          <Text className="text-blue-600 font-medium text-sm">Continuar como visitante</Text>
        </TouchableOpacity>
        <View className="flex-1 justify-center items-center">
        <Image source={Van} className="w-36 h-36"/>
        <Text className="text-black text-center font-bold text-xl">Frete gratis e entrega em {'\n'} menos de 24 horas</Text>
        </View>
        <View>
          <TouchableOpacity className="bg-blue-100 w-96 h-12 rounded-md items-center justify-center mb-3">
            <Text className="text-blue-500 font-bold">Iniciar sessão</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-100 w-96 h-12 rounded-md items-center justify-center mb-8">
            <Text className="text-blue-500 font-bold">Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}