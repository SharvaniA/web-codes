 <%
        Integer counter = (Integer)session.getAttribute("counter");
        String heading = null;
        if (counter == null) {
            counter = new Integer(1);
        } 
        else 
        {
            counter = new Integer(counter.intValue() + 5);
            if(counter >= 50)
            {
	            counter = new Integer(0);
            }
        }

        session.setAttribute("counter", counter);
        out.println(counter);
%>