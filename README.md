# University Dashboard
Electronic system of control, accounting of working hours and journal of issuing keys from the audience for university employees

### Installation

System requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd faculty_dashboard
$ npm i
$ node index.js
```

### Released features:

  - Parse MQTT request
  - Create single .xlsx file for every day
  - Manage actions from users and write to table
  - Return table on request
  - Merge files in inputed date range
  - In/Out person and Put/Get key identifier

### How to use
Create config file and run
```sh
$ node index.js
```
Income mqtt message must be JSON-like: {"name": "${number}", "action": "long/short", "room": number}
Where name number is number from users.json table; long action with room number (get/put key), short action can be without room number (enter/exit); room number - number of room which key used.

### Tech
Dasboard uses a number of open source projects to work properly:

* [node.js](http://nodejs.org/) - evented I/O for the backend
* [exceljs](https://www.npmjs.com/package/exceljs) - read, manipulate and write spreadsheet data and styles to XLSX and JSON
* [Express](https://expressjs.com/) - fast node.js network app framework
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
* [adm-zip](https://www.npmjs.com/package/adm-zip) - pure JavaScript implementation for zip data compression for NodeJS


Free mqtt broker:

* [Mosquitto](https://mosquitto.org/) - an open source (EPL/EDL licensed) message broker that implements the MQTT protocol
* [Cloudmqtt](https://www.cloudmqtt.com/) - register free mqtt broker with 5 connections limit.

And of course Dashboard itself is open source with a [public repository](https://github.com/currentlib/faculty_dashboard)
 on GitHub.



<mxGraphModel dx="2797" dy="1208" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />
    <mxCell id="VAXD4s7di8qAAWQQJWcK-3" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-1" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="200" y="120" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-1" value="Start" style="rounded=1;whiteSpace=wrap;html=1;arcSize=50;" parent="1" vertex="1">
      <mxGeometry x="120" y="40" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-6" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-4" target="VAXD4s7di8qAAWQQJWcK-5" edge="1">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="360" y="140" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-8" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-4" target="VAXD4s7di8qAAWQQJWcK-7" edge="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-4" value="Init config and listeners" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="120" y="120" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-7" value="Web request" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="800" y="200" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-10" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-5" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="360" y="280" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-5" value="On mqtt message" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="280" y="200" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-17" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-13" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="360" y="360" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-13" value="Read mqtt message" style="shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;size=0.058333333333333334;" parent="1" vertex="1">
      <mxGeometry x="280" y="280" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-14" value="&lt;div&gt;[Name]&lt;/div&gt;&lt;div&gt;[Action]&lt;/div&gt;&lt;div&gt;[Room]&lt;/div&gt;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="130" y="260" width="70" height="80" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-15" value="" style="shape=flexArrow;endArrow=classic;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-14" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="220" y="300" as="sourcePoint" />
        <mxPoint x="280" y="300" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-23" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-21" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="240" y="520" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-25" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-21" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="480" y="520" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-21" value="&lt;div&gt;Is [Action]&lt;/div&gt;&lt;div&gt;Long?&lt;br&gt;&lt;/div&gt;" style="rhombus;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="280" y="480" width="160" height="80" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-26" value="Yes" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="250" y="500" width="40" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-27" value="No" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="430" y="500" width="30" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-31" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-82" target="VAXD4s7di8qAAWQQJWcK-34" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="160" y="540" as="sourcePoint" />
        <mxPoint x="160" y="600" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-36" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-34" target="VAXD4s7di8qAAWQQJWcK-37" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="39.99999999999977" y="640" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-41" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-34" target="VAXD4s7di8qAAWQQJWcK-42" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="160" y="700" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-34" value="&lt;div&gt;count of [Room] odd?&lt;/div&gt;&lt;div&gt;Or !=0?&lt;br&gt;&lt;/div&gt;" style="rhombus;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="80" y="600" width="160" height="80" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-49" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-37" target="VAXD4s7di8qAAWQQJWcK-94" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="330" y="840" as="targetPoint" />
        <Array as="points">
          <mxPoint x="-40" y="810" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-37" value="&lt;div&gt;Add &quot;Get key&quot; to Action&lt;/div&gt;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="-120" y="710" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-38" value="&lt;div&gt;Name - Full Name of user.&lt;/div&gt;&lt;div&gt;Action: short - enter/exit; long - put/get key.&lt;/div&gt;&lt;div&gt;Room - room number.&lt;br&gt;&lt;/div&gt;" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="-120" y="275" width="240" height="50" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-39" value="No" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="62" y="619" width="30" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-95" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-42" target="VAXD4s7di8qAAWQQJWcK-94" edge="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-42" value="&lt;div&gt;Add &quot;Put key&quot; to Action&lt;/div&gt;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="80" y="710" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-97" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.25;entryY=0;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-94" target="VAXD4s7di8qAAWQQJWcK-46" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="319.99999999999955" y="810" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-94" value="Set status &quot;in&quot;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="80" y="790" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-67" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-46" target="VAXD4s7di8qAAWQQJWcK-66" edge="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-46" value="Add Action in data row" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="280" y="840" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-69" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-66" target="VAXD4s7di8qAAWQQJWcK-68" edge="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-66" value="Form data row" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="280" y="920" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-68" value="Write data row in today table" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="280" y="1000" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-43" value="Yes" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="160" y="680" width="40" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-50" value="&lt;div&gt;[number, name, action, room, time, status]&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Number - order number for today action&lt;/div&gt;&lt;div&gt;Name - Full Name of user&lt;/div&gt;&lt;div&gt;Action - enter/exit or put/get key&lt;/div&gt;&lt;div&gt;Room - room number&lt;/div&gt;&lt;div&gt;Time - date time of action&lt;/div&gt;&lt;div&gt;Status - in/out monitor where is user&lt;br&gt;&lt;/div&gt;" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="450" y="840" width="250" height="120" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-53" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-51" target="VAXD4s7di8qAAWQQJWcK-54" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="560" y="690" as="targetPoint" />
        <Array as="points">
          <mxPoint x="680" y="520" />
          <mxPoint x="680" y="680" />
          <mxPoint x="560" y="680" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-99" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-51" target="VAXD4s7di8qAAWQQJWcK-58" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="560" y="640" as="targetPoint" />
        <Array as="points">
          <mxPoint x="560" y="639" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-51" value="&lt;div&gt;Last status &quot;out&quot;&lt;/div&gt;" style="rhombus;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="480" y="480" width="160" height="80" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-60" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.75;entryY=0;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-54" target="VAXD4s7di8qAAWQQJWcK-46" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="360" y="710" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-54" value="&lt;div&gt;Add &quot;Exit&quot; to Action&lt;/div&gt;&lt;div&gt;and set status &quot;out&quot;&lt;br&gt;&lt;/div&gt;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="480" y="710" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-55" value="No" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="645" y="500" width="30" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-62" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-58" target="VAXD4s7di8qAAWQQJWcK-46" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="360" y="870" as="targetPoint" />
        <Array as="points">
          <mxPoint x="360" y="800" />
          <mxPoint x="360" y="800" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-58" value="&lt;div&gt;Add &quot;Enter&quot; to Action&lt;/div&gt;&lt;div&gt;and set status &quot;in&quot;&lt;br&gt;&lt;/div&gt;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="280" y="619" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-65" value="Yes" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="555" y="565" width="40" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-72" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-70" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="360" y="480" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-75" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" parent="1" source="VAXD4s7di8qAAWQQJWcK-70" target="VAXD4s7di8qAAWQQJWcK-76" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="240" y="400" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-70" value="&lt;div&gt;Is today table exist?&lt;br&gt;&lt;/div&gt;" style="rhombus;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="280" y="360" width="160" height="80" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-81" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-76" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="360" y="457" as="targetPoint" />
        <Array as="points">
          <mxPoint x="160" y="457" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-76" value="Create today table with headers" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="80" y="380" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-77" value="Yes" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="374" y="440" width="40" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-78" value="No" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="255" y="380" width="30" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-87" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-88" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="160" y="580" as="targetPoint" />
        <Array as="points">
          <mxPoint x="-40" y="580" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-82" value="&lt;div&gt;Last status &quot;out&quot;&lt;/div&gt;" style="rhombus;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="80" y="480" width="160" height="80" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-85" value="No" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="165" y="560" width="30" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-91" value="Yes" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" parent="1" vertex="1">
      <mxGeometry x="50" y="500" width="40" height="20" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-88" value="Add &quot;Enter and &quot; to Action" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
      <mxGeometry x="-120" y="500" width="160" height="40" as="geometry" />
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-92" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="VAXD4s7di8qAAWQQJWcK-82" target="VAXD4s7di8qAAWQQJWcK-88" edge="1">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="80" y="520" as="sourcePoint" />
        <mxPoint x="-200" y="520" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="VAXD4s7di8qAAWQQJWcK-93" value="&lt;h1&gt;Functions todo&lt;br&gt;&lt;/h1&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;IsNewUser(username) - check is it first entrance of user name in today table.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;CountOfRoom(room) - return count of room in today table.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;" style="text;html=1;strokeColor=none;fillColor=none;spacing=5;spacingTop=-20;whiteSpace=wrap;overflow=hidden;rounded=0;" parent="1" vertex="1">
      <mxGeometry x="-580" y="170" width="190" height="350" as="geometry" />
    </mxCell>
  </root>
</mxGraphModel>
