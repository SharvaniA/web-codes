<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%
String driverName = "com.mysql.jdbc.Driver";
String connectionUrl = "jdbc:mysql://165.22.14.77:3306/";
String dbName = "dbSharvani";
String userId = "sharvani";
String password = "pwdsharvani";
try 
{
	Class.forName(driverName);
} 
catch (ClassNotFoundException e) 
{
	e.printStackTrace();
}
Connection connect = null;
Statement statement = null;
ResultSet resultSet = null;
%>
<h2><strong>Item Details</strong></h2>
<table>
<tr>
	<td><b>ItemId</b></td>
	<td><b>Description</b></td>
</tr>
<%
try 
{
	connect = DriverManager.getConnection(
	connectionUrl + dbName, userId, password);
	statement = connect.createStatement();
	String sql = "SELECT * FROM Item WHERE Description LIKE '%" + request.getParameter("ItemId") + "%'";
	resultSet = statement.executeQuery(sql);
	while (resultSet.next()) 
	{
		%>
		<tr>
			<td><%=resultSet.getString("ItemId")%></td>
			<td><%=resultSet.getString("Description")%></td>
		</tr>
		<%
	}
} 
catch (Exception e) 
{
	e.printStackTrace();
}
%>
</table>

































