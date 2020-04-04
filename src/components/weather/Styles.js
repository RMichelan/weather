import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: 
    {
        flex: 1
    },

    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },

    viewToday:
    {
        flex: 8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "rgba(255, 255, 255, 0.39)",
    },

    viewForecast:
    {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
    },

    textTemp:
    {
        fontSize: 70,
        color: "#fff"
    },

    textCity:
    {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 0,
        marginBottom: 50,
    },

    textDescription:
    {
        fontSize: 20,
        color: "#fff"
    },

    scrollView: 
    {

    },

    nextDays:
    {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20

    },

    textNextDays: 
    {
        color: "#000",
        fontSize: 15
    },

})