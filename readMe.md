```xml
<mxfile host="app.diagrams.net" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36" version="24.7.6">
  <diagram name="Page-1" id="h-7xXX2QgnP-39R0vhDn">
    <mxGraphModel dx="1734" dy="855" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="FqmaF232AKE7vtcWZqVc-3" value="Utilisateur" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="50" y="320" width="140" height="130" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-4" value="+ userID (PK): String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-3">
          <mxGeometry y="26" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-5" value="+ username: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-3">
          <mxGeometry y="52" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-6" value="+ email: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-3">
          <mxGeometry y="78" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-7" value="+ password: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-3">
          <mxGeometry y="104" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-8" value="Message" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="200" y="120" width="170" height="156" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-9" value="+ messageID (PK): String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-8">
          <mxGeometry y="26" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-10" value="+ contenu: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-8">
          <mxGeometry y="52" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-11" value="+ dateEnvoi: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-8">
          <mxGeometry y="78" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-12" value="+&amp;nbsp;&lt;span style=&quot;background-color: initial;&quot;&gt;expediteurID (FK)&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;: String&lt;/span&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-8">
          <mxGeometry y="104" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-13" value="+ destinataireID&amp;nbsp;&lt;span style=&quot;background-color: initial;&quot;&gt;(FK)&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;: String&lt;/span&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-8">
          <mxGeometry y="130" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-14" value="Contact" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="380" y="320" width="170" height="134" as="geometry">
            <mxRectangle x="380" y="320" width="80" height="30" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-15" value="+ contact (PK): String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-14">
          <mxGeometry y="30" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-16" value="+ userID (FK): String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-14">
          <mxGeometry y="56" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-17" value="+ contactUserID (FK) : String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-14">
          <mxGeometry y="82" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-18" value="+ password: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-14">
          <mxGeometry y="108" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-20" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0.399;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;startArrow=ERmandOne;startFill=0;endArrow=ERmandOne;endFill=0;" edge="1" parent="1" source="FqmaF232AKE7vtcWZqVc-11" target="FqmaF232AKE7vtcWZqVc-3">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-22" value="&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;Utilisateur&amp;nbsp;&amp;nbsp;&lt;br&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;+ userID        : String&lt;br&gt;+ username      : String&lt;br&gt;+ email         : String&lt;br&gt;+ password      : String&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;+ envoyerMessage() &lt;br&gt;+ recevoirMessage()&lt;br&gt;+ ajouterContact()&amp;nbsp;&lt;br&gt;+ supprimerContact()&lt;br&gt;&lt;br&gt;&lt;/p&gt;" style="verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;" vertex="1" parent="1">
          <mxGeometry x="110" y="620" width="140" height="190" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-24" value="Message" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="390" y="620" width="170" height="170" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-25" value="+ messageID (PK): String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-24">
          <mxGeometry y="26" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-26" value="+ contenu: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-24">
          <mxGeometry y="52" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-27" value="+ dateEnvoi: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-24">
          <mxGeometry y="78" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-28" value="+&amp;nbsp;&lt;span style=&quot;background-color: initial;&quot;&gt;expediteurID (FK)&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;: String&lt;/span&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-24">
          <mxGeometry y="104" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-29" value="+ destinataireID&amp;nbsp;&lt;span style=&quot;background-color: initial;&quot;&gt;(FK)&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;: String&lt;/span&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-24">
          <mxGeometry y="130" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-36" value="" style="whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-24">
          <mxGeometry y="156" width="170" height="14" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-30" value="Contact" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="390" y="810" width="170" height="148" as="geometry">
            <mxRectangle x="380" y="320" width="80" height="30" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-31" value="+ contact (PK): String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-30">
          <mxGeometry y="30" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-32" value="+ userID (FK): String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-30">
          <mxGeometry y="56" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-33" value="+ contactUserID (FK) : String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-30">
          <mxGeometry y="82" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-34" value="+ password: String" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-30">
          <mxGeometry y="108" width="170" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-38" value="" style="whiteSpace=wrap;html=1;" vertex="1" parent="FqmaF232AKE7vtcWZqVc-30">
          <mxGeometry y="134" width="170" height="14" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-37" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="FqmaF232AKE7vtcWZqVc-35" target="FqmaF232AKE7vtcWZqVc-36">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-39" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0.409;entryY=1.011;entryDx=0;entryDy=0;entryPerimeter=0;edgeStyle=orthogonalEdgeStyle;endArrow=ERoneToMany;endFill=0;curved=0;targetPerimeterSpacing=0;jumpStyle=gap;startArrow=ERmandOne;startFill=0;" edge="1" parent="1" source="FqmaF232AKE7vtcWZqVc-31" target="FqmaF232AKE7vtcWZqVc-22">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="170" y="852.848484848485" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-44" value="&lt;div&gt;&lt;br&gt;&lt;/div&gt;" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="FqmaF232AKE7vtcWZqVc-39">
          <mxGeometry x="-0.8529" y="-1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-42" style="edgeStyle=none;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.991;entryY=0.211;entryDx=0;entryDy=0;entryPerimeter=0;startArrow=ERmandOne;startFill=0;endArrow=ERmandOne;endFill=0;" edge="1" parent="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="390" y="659" as="sourcePoint" />
            <mxPoint x="250" y="660.09" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FqmaF232AKE7vtcWZqVc-47" style="edgeStyle=orthogonalEdgeStyle;shape=connector;curved=0;rounded=1;jumpStyle=gap;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=-0.001;entryY=0.323;entryDx=0;entryDy=0;entryPerimeter=0;strokeColor=default;align=center;verticalAlign=middle;fontFamily=Helvetica;fontSize=11;fontColor=default;labelBackgroundColor=default;startArrow=ERoneToMany;startFill=0;endArrow=ERmandOne;endFill=0;targetPerimeterSpacing=0;" edge="1" parent="1" source="FqmaF232AKE7vtcWZqVc-5" target="FqmaF232AKE7vtcWZqVc-16">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>