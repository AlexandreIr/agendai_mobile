import { Text, View } from "react-native";
import { styles } from "./services.style";
import Button from "../button/button";

function Services({description, price}) {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.serviceText}>{description}</Text>
            <Text style={styles.priceText}>
                {
                    new Intl.NumberFormat("pr-BR", 
                        {style:"currency", 
                        currency:"BRL"}).format(price)
                } 
                </Text>
        </View>
        <View>
            <Button text='Agendar'/>
        </View>
    </View>
  )
}

export default Services;
