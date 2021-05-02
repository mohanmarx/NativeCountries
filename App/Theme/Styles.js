import * as React from "react"
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    mt40: {
        marginTop: 40
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    TextInput: {
        width: "86%",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        color:"#000"
    },
    btnPrimary: {
        backgroundColor: "rgba(151, 235, 244, .5)",
        width: "60%",
        paddingVertical: 15,
        alignItems: "center",
        borderRadius: 10
    },
    btnPrimaryMedium: {
        backgroundColor: "rgba(151, 235, 244, .5)",
        minWidth: "60%",
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 10
    },
    shadow: {
        shadowOffset: { height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        shadowColor: '#D7D7D7'
    },
    card: {
        backgroundColor: "#fff",
        width: "100%",
        marginVertical: 15,
        borderRadius: 10,
        padding: 15,
        flexShrink: 1
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        flexShrink: 1,
        flexWrap: "wrap"
    },
    country: {
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 30,
        textTransform:"capitalize"
    },
    logo: {
        marginLeft: 10
    },
    detailsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 18
    },
    alignCol: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    colRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    colHead: {
        fontSize: 14,
        lineHeight: 14,
        marginBottom: 8,
        textTransform:"capitalize"
    },
    colContent: {
        fontSize: 13,
        lineHeight: 13,
        textTransform:"capitalize"
    },
    weatherIcon: {
        width: 20,
        height: 20,
        borderRadius: 10
    }
})