import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    imageLogo: {
        alignSelf: "center",
        marginBottom: 80,
        width: 150,
        height: 110,
    },
    searchContainer: {
        width: "70%",
        alignSelf: "center",
        borderColor: "#fff",
    },
    searchInput: {
        borderBottomWidth: 2,
        borderColor: "#fff",
        backgroundColor: "#476954",
        color: "#fff",
        marginBottom: 40,
        borderRadius: 5,
        paddingVertical: 12,
        fontSize: 16,
        paddingHorizontal: 15
    },
    searchButton: {
        borderBottomWidth: 2,
        borderColor: "#fff",
        backgroundColor: "#2E323E",
        borderRadius: 5,
        paddingVertical: 14 
    },
    searchButtonText: {
        alignSelf: "center",
        color: "#fff",
        fontWeight: "bold"
    }
});

export default styles;
