import svgPaths from "./svg-7h9izj7vv6";
import imgContainer from "./7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function LogoAndFoundation() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Logo and Foundation">
      <div className="h-[32px] overflow-clip relative shrink-0 w-[35.753px]" data-name="axa-mini-switch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7531 32">
          <path d={svgPaths.p171a2c00} fill="var(--fill-0, #FF1721)" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#606776] text-[20px] whitespace-nowrap">v.1.1</p>
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#606776] text-[20px] whitespace-nowrap">/</p>
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#606776] text-[20px] whitespace-nowrap">Colors</p>
    </div>
  );
}

function Frame() {
  return <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-[136px]" />;
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <LogoAndFoundation />
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Publico:Light',sans-serif] leading-[64px] not-italic relative shrink-0 text-[#1a1d21] text-[64px] w-full">Background colors</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[800px]" data-name="Heading and supporting text">
      <Container />
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#606776] text-[20px] w-full">Background colors define surfaces and help differentiate content areas. They should only be applied to UI element backgrounds, such as pages or cards. We use four types of background colors: Static, interactive, contextual and elevation.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[48px] items-start p-[64px] relative size-full">
        <Header />
        <HeadingAndSupportingText />
      </div>
    </div>
  );
}

function DesignSystemHeader() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="_Design system header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function ColorInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color Info">
      <p className="[word-break:break-word] font-['Publico:Bold',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#1a1d21] text-[40px] w-full">Static</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <ColorInfo />
    </div>
  );
}

function DocsTableHeader() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[264px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-pre">{`TOKEN  `}</p>
    </div>
  );
}

function DocsTableHeader1() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip px-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">DESCRIPTION</p>
    </div>
  );
}

function DocsTableHeader2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase w-full">VALUE (RGBA/HEX)</p>
    </div>
  );
}

function DocsTableHeader3() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center max-w-[96px] overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">LIGHT MODE</p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableHeader />
      <DocsTableHeader1 />
      <DocsTableHeader2 />
      <DocsTableHeader3 />
    </div>
  );
}

function Token() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-base</p>
    </div>
  );
}

function DocsTableCell() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell1() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for standard background surfaces and default UI areas.</p>
    </div>
  );
}

function ColumnLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFFFFF</p>
      </div>
    </div>
  );
}

function DocsTableCell2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container1 />
    </div>
  );
}

function StyleProperty() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell />
      <DocsTableCell1 />
      <DocsTableCell2 />
      <DocsTableCell3 />
    </div>
  );
}

function Token1() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-disabled</p>
    </div>
  );
}

function DocsTableCell4() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token1 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell5() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for background surfaces of disabled or inactive components.</p>
    </div>
  );
}

function ColumnLabel1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (15%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0, 0, 0, 0.15</p>
      </div>
    </div>
  );
}

function DocsTableCell6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function DocsTableCell7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container2 />
    </div>
  );
}

function StyleProperty1() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell4 />
      <DocsTableCell5 />
      <DocsTableCell6 />
      <DocsTableCell7 />
    </div>
  );
}

function Token2() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-base-inverse</p>
    </div>
  );
}

function DocsTableCell8() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token2 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell9() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for background surfaces placed on dark, colored, or high-contrast areas.</p>
    </div>
  );
}

function ColumnLabel2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#04060C</p>
      </div>
    </div>
  );
}

function DocsTableCell10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#04060c] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container5 />
    </div>
  );
}

function StyleProperty2() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell8 />
      <DocsTableCell9 />
      <DocsTableCell10 />
      <DocsTableCell11 />
    </div>
  );
}

function Token3() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-disabled-inverse</p>
    </div>
  );
}

function DocsTableCell12() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token3 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell13() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for disabled background surfaces on dark, colored, or high-contrast areas.</p>
    </div>
  );
}

function ColumnLabel3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (30%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.3</p>
      </div>
    </div>
  );
}

function DocsTableCell14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function DocsTableCell15() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container6 />
    </div>
  );
}

function StyleProperty3() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell12 />
      <DocsTableCell13 />
      <DocsTableCell14 />
      <DocsTableCell15 />
    </div>
  );
}

function Token4() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-decorative-emphasis-functional-low</p>
    </div>
  );
}

function DocsTableCell16() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token4 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell17() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle functional backgrounds that create gentle separation from the base.</p>
    </div>
  );
}

function ColumnLabel4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FAFAFA</p>
      </div>
    </div>
  );
}

function DocsTableCell18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell19() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container9 />
    </div>
  );
}

function StyleProperty4() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell16 />
      <DocsTableCell17 />
      <DocsTableCell18 />
      <DocsTableCell19 />
    </div>
  );
}

function Token5() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-decorative-emphasis-functional-medium</p>
    </div>
  );
}

function DocsTableCell20() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token5 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell21() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for functional backgrounds with moderate contrast to clearly separate layers.</p>
    </div>
  );
}

function ColumnLabel5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#F7F7F8</p>
      </div>
    </div>
  );
}

function DocsTableCell22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f7f7f8] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell23() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container10 />
    </div>
  );
}

function StyleProperty5() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell20 />
      <DocsTableCell21 />
      <DocsTableCell22 />
      <DocsTableCell23 />
    </div>
  );
}

function Token6() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-decorative-emphasis-functional-high</p>
    </div>
  );
}

function DocsTableCell24() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token6 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell25() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for strong functional backgrounds that provide distinct separation and clarity.</p>
    </div>
  );
}

function ColumnLabel6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#EFEFF1</p>
      </div>
    </div>
  );
}

function DocsTableCell26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#efeff1] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell27() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container11 />
    </div>
  );
}

function StyleProperty6() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell24 />
      <DocsTableCell25 />
      <DocsTableCell26 />
      <DocsTableCell27 />
    </div>
  );
}

function Token7() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-decorative-emphasis-expressive-low</p>
    </div>
  );
}

function DocsTableCell28() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token7 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell29() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for expressive backgrounds with a light accent tone to support subtle hierarchy, such as banners, sections or small emphasized element.</p>
    </div>
  );
}

function ColumnLabel7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#E2EFFF</p>
      </div>
    </div>
  );
}

function DocsTableCell30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel7 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#e2efff] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell31() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container12 />
    </div>
  );
}

function StyleProperty7() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell28 />
      <DocsTableCell29 />
      <DocsTableCell30 />
      <DocsTableCell31 />
    </div>
  );
}

function Token8() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-decorative-emphasis-expressive-medium</p>
    </div>
  );
}

function DocsTableCell32() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token8 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell33() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for expressive backgrounds with a medium accent tone to reinforce structure, such as banners, sections or small emphasized element.</p>
    </div>
  );
}

function ColumnLabel8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">{` `}</p>
      </div>
    </div>
  );
}

function DocsTableCell34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#4658fc] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell35() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container13 />
    </div>
  );
}

function StyleProperty8() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell32 />
      <DocsTableCell33 />
      <DocsTableCell34 />
      <DocsTableCell35 />
    </div>
  );
}

function Token9() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-decorative-emphasis-expressive-high</p>
    </div>
  );
}

function DocsTableCell36() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token9 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell37() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for expressive backgrounds with a strong accent tone to create clear hierarchy and differentiation, such as banners, sections or small emphasized element.</p>
    </div>
  );
}

function ColumnLabel9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#070E40</p>
      </div>
    </div>
  );
}

function DocsTableCell38() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel9 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#070e40] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell39() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container14 />
    </div>
  );
}

function StyleProperty9() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell36 />
      <DocsTableCell37 />
      <DocsTableCell38 />
      <DocsTableCell39 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table">
      <TableHeader />
      <StyleProperty />
      <StyleProperty1 />
      <StyleProperty2 />
      <StyleProperty3 />
      <StyleProperty4 />
      <StyleProperty5 />
      <StyleProperty6 />
      <StyleProperty7 />
      <StyleProperty8 />
      <StyleProperty9 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[848px]" data-name="Tabs">
      <Table />
    </div>
  );
}

function ColorBrand() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="color-brand">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start p-[40px] relative size-full">
          <Description />
          <Tabs />
        </div>
      </div>
    </div>
  );
}

function ColorInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color Info">
      <p className="[word-break:break-word] font-['Publico:Bold',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#1a1d21] text-[40px] w-full">Interaction</p>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <ColorInfo1 />
    </div>
  );
}

function DocsTableHeader4() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[264px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-pre">{`TOKEN  `}</p>
    </div>
  );
}

function DocsTableHeader5() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip px-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">DESCRIPTION</p>
    </div>
  );
}

function DocsTableHeader6() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase w-full">VALUE (RGBA/HEX)</p>
    </div>
  );
}

function DocsTableHeader7() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center max-w-[96px] overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">LIGHT MODE</p>
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableHeader4 />
      <DocsTableHeader5 />
      <DocsTableHeader6 />
      <DocsTableHeader7 />
    </div>
  );
}

function Token10() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-ghost</p>
    </div>
  );
}

function DocsTableCell40() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token10 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell41() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for primary actions with no emphasis, keeping the background invisible, such as buttons, interactive tiles, dropdowns.</p>
    </div>
  );
}

function ColumnLabel10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function DocsTableCell43() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container15 />
    </div>
  );
}

function StyleProperty10() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell40 />
      <DocsTableCell41 />
      <DocsTableCell42 />
      <DocsTableCell43 />
    </div>
  );
}

function Token11() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-default</p>
    </div>
  );
}

function DocsTableCell44() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token11 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell45() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for primary actions in their default state with strong visibility, such as button. `}</p>
    </div>
  );
}

function ColumnLabel11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">{` `}</p>
      </div>
    </div>
  );
}

function DocsTableCell46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel11 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#00008f] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell47() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container18 />
    </div>
  );
}

function StyleProperty11() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell44 />
      <DocsTableCell45 />
      <DocsTableCell46 />
      <DocsTableCell47 />
    </div>
  );
}

function Token12() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-hover</p>
    </div>
  );
}

function DocsTableCell48() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token12 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell49() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions when hovered, highlighting interactivity.</p>
    </div>
  );
}

function ColumnLabel12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#0000F7</p>
      </div>
    </div>
  );
}

function DocsTableCell50() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel12 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#0000f7] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell51() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container19 />
    </div>
  );
}

function StyleProperty12() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell48 />
      <DocsTableCell49 />
      <DocsTableCell50 />
      <DocsTableCell51 />
    </div>
  );
}

function Token13() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-active</p>
    </div>
  );
}

function DocsTableCell52() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token13 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell53() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions when active or pressed, signaling user engagement.</p>
    </div>
  );
}

function ColumnLabel13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#0000D2</p>
      </div>
    </div>
  );
}

function DocsTableCell54() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel13 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#0000d2] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell55() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container20 />
    </div>
  );
}

function StyleProperty13() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell52 />
      <DocsTableCell53 />
      <DocsTableCell54 />
      <DocsTableCell55 />
    </div>
  );
}

function Token14() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-ghost-inverse</p>
    </div>
  );
}

function DocsTableCell56() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token14 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell57() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for primary actions on dark, colored, or high-contrast backgrounds, such as buttons, interactive tiles, dropdowns.</p>
    </div>
  );
}

function ColumnLabel14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell58() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel14 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function DocsTableCell59() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container21 />
    </div>
  );
}

function StyleProperty14() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell56 />
      <DocsTableCell57 />
      <DocsTableCell58 />
      <DocsTableCell59 />
    </div>
  );
}

function Token15() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-default-inverse</p>
    </div>
  );
}

function DocsTableCell60() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token15 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell61() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for primary actions in their default state with strong visibility, such as button, on dark, colored, or high-contrast backgrounds. `}</p>
    </div>
  );
}

function ColumnLabel15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFFFFF</p>
      </div>
    </div>
  );
}

function DocsTableCell62() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel15 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell63() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container24 />
    </div>
  );
}

function StyleProperty15() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell60 />
      <DocsTableCell61 />
      <DocsTableCell62 />
      <DocsTableCell63 />
    </div>
  );
}

function Token16() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-hover-inverse</p>
    </div>
  );
}

function DocsTableCell64() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token16 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell65() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions when hovered, highlighting interactivity, on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#E8EAED</p>
      </div>
    </div>
  );
}

function DocsTableCell66() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel16 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#e8eaed] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell67() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container25 />
    </div>
  );
}

function StyleProperty16() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell64 />
      <DocsTableCell65 />
      <DocsTableCell66 />
      <DocsTableCell67 />
    </div>
  );
}

function Token17() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-active-inverse</p>
    </div>
  );
}

function DocsTableCell68() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token17 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell69() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions when active or pressed, signaling user engagement, on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#D4D7DD</p>
      </div>
    </div>
  );
}

function DocsTableCell70() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel17 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#d4d7dd] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell71() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container26 />
    </div>
  );
}

function StyleProperty17() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell68 />
      <DocsTableCell69 />
      <DocsTableCell70 />
      <DocsTableCell71 />
    </div>
  );
}

function Token18() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-soft-ghost</p>
    </div>
  );
}

function DocsTableCell72() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token18 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell73() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for low-emphasis primary action backgrounds.</p>
    </div>
  );
}

function ColumnLabel18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell74() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel18 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function DocsTableCell75() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container27 />
    </div>
  );
}

function StyleProperty18() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell72 />
      <DocsTableCell73 />
      <DocsTableCell74 />
      <DocsTableCell75 />
    </div>
  );
}

function Token19() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-soft-default</p>
    </div>
  );
}

function DocsTableCell76() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token19 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell77() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a soft background, adding a discreet accent while remaining light.</p>
    </div>
  );
}

function ColumnLabel19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#F8FAFF</p>
      </div>
    </div>
  );
}

function DocsTableCell78() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel19 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f8faff] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell79() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container28 />
    </div>
  );
}

function StyleProperty19() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell76 />
      <DocsTableCell77 />
      <DocsTableCell78 />
      <DocsTableCell79 />
    </div>
  );
}

function Token20() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-soft-hover</p>
    </div>
  );
}

function DocsTableCell80() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token20 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell81() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a soft background when hovered, reinforcing discrete emphasis.</p>
    </div>
  );
}

function ColumnLabel20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#F0F6FF</p>
      </div>
    </div>
  );
}

function DocsTableCell82() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel20 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f0f6ff] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell83() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container29 />
    </div>
  );
}

function StyleProperty20() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell80 />
      <DocsTableCell81 />
      <DocsTableCell82 />
      <DocsTableCell83 />
    </div>
  );
}

function Token21() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-soft-active</p>
    </div>
  );
}

function DocsTableCell84() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token21 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell85() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a soft background when active or pressed.</p>
    </div>
  );
}

function ColumnLabel21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#F0F6FF</p>
      </div>
    </div>
  );
}

function DocsTableCell86() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel21 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f0f6ff] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell87() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container30 />
    </div>
  );
}

function StyleProperty21() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell84 />
      <DocsTableCell85 />
      <DocsTableCell86 />
      <DocsTableCell87 />
    </div>
  );
}

function Token22() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-soft-ghost-inverse</p>
    </div>
  );
}

function DocsTableCell88() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token22 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell89() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for low-emphasis primary action backgrounds, on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell90() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel22 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function DocsTableCell91() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container31 />
    </div>
  );
}

function StyleProperty22() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell88 />
      <DocsTableCell89 />
      <DocsTableCell90 />
      <DocsTableCell91 />
    </div>
  );
}

function Token23() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-soft-default-inverse</p>
    </div>
  );
}

function DocsTableCell92() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token23 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell93() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a soft background, adding a discreet accent while remaining light on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (30%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.3</p>
      </div>
    </div>
  );
}

function DocsTableCell94() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel23 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function DocsTableCell95() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container34 />
    </div>
  );
}

function StyleProperty23() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell92 />
      <DocsTableCell93 />
      <DocsTableCell94 />
      <DocsTableCell95 />
    </div>
  );
}

function Token24() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-soft-hover-inverse</p>
    </div>
  );
}

function DocsTableCell96() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token24 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell97() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a soft background when hovered, reinforcing discrete emphasis on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (60%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.6</p>
      </div>
    </div>
  );
}

function DocsTableCell98() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel24 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.6)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function DocsTableCell99() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container37 />
    </div>
  );
}

function StyleProperty24() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell96 />
      <DocsTableCell97 />
      <DocsTableCell98 />
      <DocsTableCell99 />
    </div>
  );
}

function Token25() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-soft-active-inverse</p>
    </div>
  );
}

function DocsTableCell100() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token25 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell101() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a soft background when active or pressed on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFFFFF</p>
      </div>
    </div>
  );
}

function DocsTableCell102() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel25 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell103() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container40 />
    </div>
  );
}

function StyleProperty25() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell100 />
      <DocsTableCell101 />
      <DocsTableCell102 />
      <DocsTableCell103 />
    </div>
  );
}

function Token26() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-subtle-ghost</p>
    </div>
  );
}

function DocsTableCell104() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token26 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell105() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for very low-emphasis primary action backgrounds.</p>
    </div>
  );
}

function ColumnLabel26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell106() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel26 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function DocsTableCell107() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container41 />
    </div>
  );
}

function StyleProperty26() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell104 />
      <DocsTableCell105 />
      <DocsTableCell106 />
      <DocsTableCell107 />
    </div>
  );
}

function Token27() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-subtle-default</p>
    </div>
  );
}

function DocsTableCell108() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token27 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell109() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a subtle neutral background, providing minimal emphasis that help structure the layout without adding visual weight.</p>
    </div>
  );
}

function ColumnLabel27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FAFAFA</p>
      </div>
    </div>
  );
}

function DocsTableCell110() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel27 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell111() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container44 />
    </div>
  );
}

function StyleProperty27() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell108 />
      <DocsTableCell109 />
      <DocsTableCell110 />
      <DocsTableCell111 />
    </div>
  );
}

function Token28() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-subtle-hover</p>
    </div>
  );
}

function DocsTableCell112() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token28 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell113() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a subtle neutral background when hovered, adding slight visibility.</p>
    </div>
  );
}

function ColumnLabel28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#F7F7F8</p>
      </div>
    </div>
  );
}

function DocsTableCell114() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel28 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f7f7f8] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell115() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container45 />
    </div>
  );
}

function StyleProperty28() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell112 />
      <DocsTableCell113 />
      <DocsTableCell114 />
      <DocsTableCell115 />
    </div>
  );
}

function Token29() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-subtle-active</p>
    </div>
  );
}

function DocsTableCell116() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token29 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell117() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a subtle neutral background when active or pressed.</p>
    </div>
  );
}

function ColumnLabel29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#E8EAED</p>
      </div>
    </div>
  );
}

function DocsTableCell118() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel29 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#e8eaed] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell119() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container46 />
    </div>
  );
}

function StyleProperty29() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell116 />
      <DocsTableCell117 />
      <DocsTableCell118 />
      <DocsTableCell119 />
    </div>
  );
}

function Token30() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-subtle-ghost-inverse</p>
    </div>
  );
}

function DocsTableCell120() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token30 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell121() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for very low-emphasis primary action backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell122() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel30 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function DocsTableCell123() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container47 />
    </div>
  );
}

function StyleProperty30() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell120 />
      <DocsTableCell121 />
      <DocsTableCell122 />
      <DocsTableCell123 />
    </div>
  );
}

function Token31() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-subtle-default-inverse</p>
    </div>
  );
}

function DocsTableCell124() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token31 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell125() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a subtle neutral background, providing minimal emphasis that help structure the layout without adding visual weight on dark, colored or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (5%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.05</p>
      </div>
    </div>
  );
}

function DocsTableCell126() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel31 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.05)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function DocsTableCell127() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container50 />
    </div>
  );
}

function StyleProperty31() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell124 />
      <DocsTableCell125 />
      <DocsTableCell126 />
      <DocsTableCell127 />
    </div>
  );
}

function Token32() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-subtle-hover-inverse</p>
    </div>
  );
}

function DocsTableCell128() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token32 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell129() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with a subtle neutral background when hovered, adding slight visibility on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (10%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.1</p>
      </div>
    </div>
  );
}

function DocsTableCell130() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel32 />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.1)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function DocsTableCell131() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container53 />
    </div>
  );
}

function StyleProperty32() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell128 />
      <DocsTableCell129 />
      <DocsTableCell130 />
      <DocsTableCell131 />
    </div>
  );
}

function Token33() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-primary-subtle-active-inverse</p>
    </div>
  );
}

function DocsTableCell132() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token33 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell133() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for primary actions with subtle backgrounds when active or pressed on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (15%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.15</p>
      </div>
    </div>
  );
}

function DocsTableCell134() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel33 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.15)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function DocsTableCell135() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container56 />
    </div>
  );
}

function StyleProperty33() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell132 />
      <DocsTableCell133 />
      <DocsTableCell134 />
      <DocsTableCell135 />
    </div>
  );
}

function Token34() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-ghost</p>
    </div>
  );
}

function DocsTableCell136() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token34 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell137() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for ghost-style secondary actions (less important actions) with no emphasis, keeping the background invisible.</p>
    </div>
  );
}

function ColumnLabel34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0,0</p>
      </div>
    </div>
  );
}

function DocsTableCell138() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel34 />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function DocsTableCell139() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container59 />
    </div>
  );
}

function StyleProperty34() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell136 />
      <DocsTableCell137 />
      <DocsTableCell138 />
      <DocsTableCell139 />
    </div>
  );
}

function Token35() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-default</p>
    </div>
  );
}

function DocsTableCell140() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token35 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell141() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for secondary actions (less important actions) in their default state with strong visibility, such as button. `}</p>
    </div>
  );
}

function ColumnLabel35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#434956</p>
      </div>
    </div>
  );
}

function DocsTableCell142() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel35 />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#434956] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell143() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container62 />
    </div>
  );
}

function StyleProperty35() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell140 />
      <DocsTableCell141 />
      <DocsTableCell142 />
      <DocsTableCell143 />
    </div>
  );
}

function Token36() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-hover</p>
    </div>
  );
}

function DocsTableCell144() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token36 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell145() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) when hovered, highlighting interactivity.</p>
    </div>
  );
}

function ColumnLabel36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#2B303B</p>
      </div>
    </div>
  );
}

function DocsTableCell146() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel36 />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#2b303b] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell147() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container63 />
    </div>
  );
}

function StyleProperty36() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell144 />
      <DocsTableCell145 />
      <DocsTableCell146 />
      <DocsTableCell147 />
    </div>
  );
}

function Token37() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-active</p>
    </div>
  );
}

function DocsTableCell148() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token37 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell149() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) when active or pressed, signaling user engagement.</p>
    </div>
  );
}

function ColumnLabel37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#1A1D21</p>
      </div>
    </div>
  );
}

function DocsTableCell150() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel37 />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#1a1d21] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell151() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container64 />
    </div>
  );
}

function StyleProperty37() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell148 />
      <DocsTableCell149 />
      <DocsTableCell150 />
      <DocsTableCell151 />
    </div>
  );
}

function Token38() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-ghost-inverse</p>
    </div>
  );
}

function DocsTableCell152() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token38 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell153() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for secondary actions (less important actions) on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell154() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel38 />
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function DocsTableCell155() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container65 />
    </div>
  );
}

function StyleProperty38() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell152 />
      <DocsTableCell153 />
      <DocsTableCell154 />
      <DocsTableCell155 />
    </div>
  );
}

function Token39() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-default-inverse</p>
    </div>
  );
}

function DocsTableCell156() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token39 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell157() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for secondary actions (less important actions) in their default state with strong visibility, such as button, on dark, colored, or high-contrast backgrounds. `}</p>
    </div>
  );
}

function ColumnLabel39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (80%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.8</p>
      </div>
    </div>
  );
}

function DocsTableCell158() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel39 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container70 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container69 />
    </div>
  );
}

function DocsTableCell159() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container68 />
    </div>
  );
}

function StyleProperty39() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell156 />
      <DocsTableCell157 />
      <DocsTableCell158 />
      <DocsTableCell159 />
    </div>
  );
}

function Token40() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-hover-inverse</p>
    </div>
  );
}

function DocsTableCell160() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token40 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell161() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) when hovered, highlighting interactivity, on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFFFFF</p>
      </div>
    </div>
  );
}

function DocsTableCell162() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel40 />
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container74 />
    </div>
  );
}

function DocsTableCell163() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container73 />
    </div>
  );
}

function StyleProperty40() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell160 />
      <DocsTableCell161 />
      <DocsTableCell162 />
      <DocsTableCell163 />
    </div>
  );
}

function Token41() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-active-inverse</p>
    </div>
  );
}

function DocsTableCell164() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token41 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell165() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) when active or pressed, signaling user engagement, on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFFFFF</p>
      </div>
    </div>
  );
}

function DocsTableCell166() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel41 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell167() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container75 />
    </div>
  );
}

function StyleProperty41() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell164 />
      <DocsTableCell165 />
      <DocsTableCell166 />
      <DocsTableCell167 />
    </div>
  );
}

function Token42() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-soft-ghost</p>
    </div>
  );
}

function DocsTableCell168() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token42 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell169() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for low-emphasis secondary action backgrounds.</p>
    </div>
  );
}

function ColumnLabel42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell170() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel42 />
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function DocsTableCell171() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container76 />
    </div>
  );
}

function StyleProperty42() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell168 />
      <DocsTableCell169 />
      <DocsTableCell170 />
      <DocsTableCell171 />
    </div>
  );
}

function Token43() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-soft-default</p>
    </div>
  );
}

function DocsTableCell172() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token43 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell173() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a soft background, adding a discreet accent while remaining light.</p>
    </div>
  );
}

function ColumnLabel43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#E8EAED</p>
      </div>
    </div>
  );
}

function DocsTableCell174() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel43 />
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#e8eaed] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell175() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container79 />
    </div>
  );
}

function StyleProperty43() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell172 />
      <DocsTableCell173 />
      <DocsTableCell174 />
      <DocsTableCell175 />
    </div>
  );
}

function Token44() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-soft-hover</p>
    </div>
  );
}

function DocsTableCell176() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token44 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell177() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a soft background when hovered, reinforcing discrete emphasis.</p>
    </div>
  );
}

function ColumnLabel44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#D4D7DD</p>
      </div>
    </div>
  );
}

function DocsTableCell178() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel44 />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#d4d7dd] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell179() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container80 />
    </div>
  );
}

function StyleProperty44() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell176 />
      <DocsTableCell177 />
      <DocsTableCell178 />
      <DocsTableCell179 />
    </div>
  );
}

function Token45() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-soft-active</p>
    </div>
  );
}

function DocsTableCell180() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token45 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell181() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a soft background when active or pressed.</p>
    </div>
  );
}

function ColumnLabel45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#C7CAD1</p>
      </div>
    </div>
  );
}

function DocsTableCell182() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel45 />
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#c7cad1] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell183() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container81 />
    </div>
  );
}

function StyleProperty45() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell180 />
      <DocsTableCell181 />
      <DocsTableCell182 />
      <DocsTableCell183 />
    </div>
  );
}

function Token46() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-soft-ghost-inverse</p>
    </div>
  );
}

function DocsTableCell184() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token46 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell185() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for low-emphasis secondary action, on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell186() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel46 />
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container84() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function DocsTableCell187() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container82 />
    </div>
  );
}

function StyleProperty46() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell184 />
      <DocsTableCell185 />
      <DocsTableCell186 />
      <DocsTableCell187 />
    </div>
  );
}

function Token47() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-soft-default-inverse</p>
    </div>
  );
}

function DocsTableCell188() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token47 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell189() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a soft background, adding a discreet accent while remaining light on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (20%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.2</p>
      </div>
    </div>
  );
}

function DocsTableCell190() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel47 />
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container89() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container87 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container86 />
    </div>
  );
}

function DocsTableCell191() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container85 />
    </div>
  );
}

function StyleProperty47() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell188 />
      <DocsTableCell189 />
      <DocsTableCell190 />
      <DocsTableCell191 />
    </div>
  );
}

function Token48() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-soft-hover-inverse</p>
    </div>
  );
}

function DocsTableCell192() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token48 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell193() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a soft background when hovered, reinforcing discrete emphasis on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (30%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.3</p>
      </div>
    </div>
  );
}

function DocsTableCell194() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel48 />
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.6)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container92 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container91 />
    </div>
  );
}

function DocsTableCell195() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container90 />
    </div>
  );
}

function StyleProperty48() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell192 />
      <DocsTableCell193 />
      <DocsTableCell194 />
      <DocsTableCell195 />
    </div>
  );
}

function Token49() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-soft-active-inverse</p>
    </div>
  );
}

function DocsTableCell196() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token49 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell197() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a soft background when active or pressed on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (60%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.6</p>
      </div>
    </div>
  );
}

function DocsTableCell198() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel49 />
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container99() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-white inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container97 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container96 />
    </div>
  );
}

function DocsTableCell199() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container95 />
    </div>
  );
}

function StyleProperty49() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell196 />
      <DocsTableCell197 />
      <DocsTableCell198 />
      <DocsTableCell199 />
    </div>
  );
}

function Token50() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-subtle-ghost</p>
    </div>
  );
}

function DocsTableCell200() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token50 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell201() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for very low-emphasis secondary action backgrounds.</p>
    </div>
  );
}

function ColumnLabel50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell202() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel50 />
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container102() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container101 />
      <Container102 />
    </div>
  );
}

function DocsTableCell203() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container100 />
    </div>
  );
}

function StyleProperty50() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell200 />
      <DocsTableCell201 />
      <DocsTableCell202 />
      <DocsTableCell203 />
    </div>
  );
}

function Token51() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-subtle-default</p>
    </div>
  );
}

function DocsTableCell204() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token51 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell205() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a subtle neutral background, providing minimal emphasis that help structure the layout without adding visual weight.</p>
    </div>
  );
}

function ColumnLabel51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FAFAFA</p>
      </div>
    </div>
  );
}

function DocsTableCell206() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel51 />
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell207() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container103 />
    </div>
  );
}

function StyleProperty51() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell204 />
      <DocsTableCell205 />
      <DocsTableCell206 />
      <DocsTableCell207 />
    </div>
  );
}

function Token52() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-subtle-hover</p>
    </div>
  );
}

function DocsTableCell208() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token52 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell209() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a subtle neutral background when hovered, adding slight visibility.</p>
    </div>
  );
}

function ColumnLabel52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#F7F7F8</p>
      </div>
    </div>
  );
}

function DocsTableCell210() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel52 />
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[#f7f7f8] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell211() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container104 />
    </div>
  );
}

function StyleProperty52() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell208 />
      <DocsTableCell209 />
      <DocsTableCell210 />
      <DocsTableCell211 />
    </div>
  );
}

function Token53() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-subtle-active</p>
    </div>
  );
}

function DocsTableCell212() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token53 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell213() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a subtle neutral background when active or pressed.</p>
    </div>
  );
}

function ColumnLabel53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#E8EAED</p>
      </div>
    </div>
  );
}

function DocsTableCell214() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel53 />
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#e8eaed] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell215() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container105 />
    </div>
  );
}

function StyleProperty53() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell212 />
      <DocsTableCell213 />
      <DocsTableCell214 />
      <DocsTableCell215 />
    </div>
  );
}

function Token54() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-subtle-ghost-inverse</p>
    </div>
  );
}

function DocsTableCell216() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token54 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell217() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for very low-emphasis secondary action backgrounds (less important actions) on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell218() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel54 />
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container108() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container107 />
      <Container108 />
    </div>
  );
}

function DocsTableCell219() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container106 />
    </div>
  );
}

function StyleProperty54() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell216 />
      <DocsTableCell217 />
      <DocsTableCell218 />
      <DocsTableCell219 />
    </div>
  );
}

function Token55() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-subtle-default-inverse</p>
    </div>
  );
}

function DocsTableCell220() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token55 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell221() {
  return (
    <div className="content-stretch flex flex-col h-[132px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a subtle neutral background, providing minimal emphasis that help structure the layout without adding visual weight on dark, colored or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (5%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.05</p>
      </div>
    </div>
  );
}

function DocsTableCell222() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel55 />
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container111() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.05)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container110 />
      <Container111 />
    </div>
  );
}

function DocsTableCell223() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container109 />
    </div>
  );
}

function StyleProperty55() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell220 />
      <DocsTableCell221 />
      <DocsTableCell222 />
      <DocsTableCell223 />
    </div>
  );
}

function Token56() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-subtle-hover-inverse</p>
    </div>
  );
}

function DocsTableCell224() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token56 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell225() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with a subtle neutral background when hovered, adding slight visibility on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (10%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.1</p>
      </div>
    </div>
  );
}

function DocsTableCell226() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel56 />
    </div>
  );
}

function Container113() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container114() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.1)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container113 />
      <Container114 />
    </div>
  );
}

function DocsTableCell227() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container112 />
    </div>
  );
}

function StyleProperty56() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell224 />
      <DocsTableCell225 />
      <DocsTableCell226 />
      <DocsTableCell227 />
    </div>
  );
}

function Token57() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-secondary-subtle-active-inverse</p>
    </div>
  );
}

function DocsTableCell228() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token57 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell229() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for secondary actions (less important actions) with subtle backgrounds when active or pressed on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (15%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.15</p>
      </div>
    </div>
  );
}

function DocsTableCell230() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel57 />
    </div>
  );
}

function Container118() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container119() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.15)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container118 />
      <Container119 />
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container117 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container116 />
    </div>
  );
}

function DocsTableCell231() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container115 />
    </div>
  );
}

function StyleProperty57() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell228 />
      <DocsTableCell229 />
      <DocsTableCell230 />
      <DocsTableCell231 />
    </div>
  );
}

function Token58() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-blur-ghost</p>
    </div>
  );
}

function DocsTableCell232() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token58 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell233() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state for very low-emphasis translucent action background.</p>
    </div>
  );
}

function ColumnLabel58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell234() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel58 />
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container122() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container121 />
      <Container122 />
    </div>
  );
}

function DocsTableCell235() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container120 />
    </div>
  );
}

function StyleProperty58() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell232 />
      <DocsTableCell233 />
      <DocsTableCell234 />
      <DocsTableCell235 />
    </div>
  );
}

function Token59() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-blur-default</p>
    </div>
  );
}

function DocsTableCell236() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token59 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell237() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for actions with a very low-emphasis translucent background.</p>
    </div>
  );
}

function ColumnLabel59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (5%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.05</p>
      </div>
    </div>
  );
}

function DocsTableCell238() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel59 />
    </div>
  );
}

function Container126() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container127() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.05)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container126 />
      <Container127 />
    </div>
  );
}

function Container124() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container125 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container124 />
    </div>
  );
}

function DocsTableCell239() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container123 />
    </div>
  );
}

function StyleProperty59() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell236 />
      <DocsTableCell237 />
      <DocsTableCell238 />
      <DocsTableCell239 />
    </div>
  );
}

function Token60() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-blur-hover</p>
    </div>
  );
}

function DocsTableCell240() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token60 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell241() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for actions with a translucent background when hovered, increasing visibility slightly.</p>
    </div>
  );
}

function ColumnLabel60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (15%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.15</p>
      </div>
    </div>
  );
}

function DocsTableCell242() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel60 />
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container132() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.15)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container131 />
      <Container132 />
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container130 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container129 />
    </div>
  );
}

function DocsTableCell243() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container128 />
    </div>
  );
}

function StyleProperty60() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell240 />
      <DocsTableCell241 />
      <DocsTableCell242 />
      <DocsTableCell243 />
    </div>
  );
}

function Token61() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-blur-active</p>
    </div>
  );
}

function DocsTableCell244() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token61 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell245() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for actions with a translucent background when active or pressed, with higher visibility.</p>
    </div>
  );
}

function ColumnLabel61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (30%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.3</p>
      </div>
    </div>
  );
}

function DocsTableCell246() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel61 />
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container137() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container136 />
      <Container137 />
    </div>
  );
}

function Container134() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container135 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container134 />
    </div>
  );
}

function DocsTableCell247() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container133 />
    </div>
  );
}

function StyleProperty61() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell244 />
      <DocsTableCell245 />
      <DocsTableCell246 />
      <DocsTableCell247 />
    </div>
  );
}

function Token62() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-strong-ghost</p>
    </div>
  );
}

function DocsTableCell248() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token62 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell249() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for ghost actions on strong interaction background. `}</p>
    </div>
  );
}

function ColumnLabel62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell250() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel62 />
    </div>
  );
}

function Container139() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container140() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container139 />
      <Container140 />
    </div>
  );
}

function DocsTableCell251() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container138 />
    </div>
  );
}

function StyleProperty62() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell248 />
      <DocsTableCell249 />
      <DocsTableCell250 />
      <DocsTableCell251 />
    </div>
  );
}

function Token63() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-strong-default</p>
    </div>
  );
}

function DocsTableCell252() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token63 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell253() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for important actions, applying the highest emphasis action background, such as strong buttons or icon buttons. `}</p>
    </div>
  );
}

function ColumnLabel63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FF1721</p>
      </div>
    </div>
  );
}

function DocsTableCell254() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel63 />
    </div>
  );
}

function Container141() {
  return (
    <div className="bg-[#ff1721] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell255() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container141 />
    </div>
  );
}

function StyleProperty63() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell252 />
      <DocsTableCell253 />
      <DocsTableCell254 />
      <DocsTableCell255 />
    </div>
  );
}

function Token64() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-strong-hover</p>
    </div>
  );
}

function DocsTableCell256() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token64 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell257() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for important actions when hovered, reinforcing visibility and attention.</p>
    </div>
  );
}

function ColumnLabel64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">{`#CC0009 `}</p>
      </div>
    </div>
  );
}

function DocsTableCell258() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel64 />
    </div>
  );
}

function Container142() {
  return (
    <div className="bg-[#cc0009] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell259() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container142 />
    </div>
  );
}

function StyleProperty64() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell256 />
      <DocsTableCell257 />
      <DocsTableCell258 />
      <DocsTableCell259 />
    </div>
  );
}

function Token65() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-strong-active</p>
    </div>
  );
}

function DocsTableCell260() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token65 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell261() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for important actions when active or pressed, showing maximum emphasis.</p>
    </div>
  );
}

function ColumnLabel65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#B20008</p>
      </div>
    </div>
  );
}

function DocsTableCell262() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel65 />
    </div>
  );
}

function Container143() {
  return (
    <div className="bg-[#b20008] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell263() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container143 />
    </div>
  );
}

function StyleProperty65() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell260 />
      <DocsTableCell261 />
      <DocsTableCell262 />
      <DocsTableCell263 />
    </div>
  );
}

function Token66() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-strong-ghost-inverse</p>
    </div>
  );
}

function DocsTableCell264() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token66 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell265() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as an alternative initial state on strong action background on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell266() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel66 />
    </div>
  );
}

function Container145() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container146() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container145 />
      <Container146 />
    </div>
  );
}

function DocsTableCell267() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container144 />
    </div>
  );
}

function StyleProperty66() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell264 />
      <DocsTableCell265 />
      <DocsTableCell266 />
      <DocsTableCell267 />
    </div>
  );
}

function Token67() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-strong-default-inverse</p>
    </div>
  );
}

function DocsTableCell268() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token67 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell269() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for important actions, applying a high-emphasis background, such as strong buttons on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FF1721</p>
      </div>
    </div>
  );
}

function DocsTableCell270() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel67 />
    </div>
  );
}

function Container147() {
  return (
    <div className="bg-[#ff1721] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell271() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container147 />
    </div>
  );
}

function StyleProperty67() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell268 />
      <DocsTableCell269 />
      <DocsTableCell270 />
      <DocsTableCell271 />
    </div>
  );
}

function Token68() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-strong-hover-inverse</p>
    </div>
  );
}

function DocsTableCell272() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token68 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell273() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for important actions when hovered, reinforcing visibility and attention on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FF333C</p>
      </div>
    </div>
  );
}

function DocsTableCell274() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel68 />
    </div>
  );
}

function Container148() {
  return (
    <div className="bg-[#ff333c] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell275() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container148 />
    </div>
  );
}

function StyleProperty68() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell272 />
      <DocsTableCell273 />
      <DocsTableCell274 />
      <DocsTableCell275 />
    </div>
  );
}

function Token69() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-interaction-strong-active-inverse</p>
    </div>
  );
}

function DocsTableCell276() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token69 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell277() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for important actions when active or pressed, showing maximum emphasis, on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FF454D</p>
      </div>
    </div>
  );
}

function DocsTableCell278() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel69 />
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[#ff454d] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell279() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container149 />
    </div>
  );
}

function StyleProperty69() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell276 />
      <DocsTableCell277 />
      <DocsTableCell278 />
      <DocsTableCell279 />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table">
      <TableHeader1 />
      <StyleProperty10 />
      <StyleProperty11 />
      <StyleProperty12 />
      <StyleProperty13 />
      <StyleProperty14 />
      <StyleProperty15 />
      <StyleProperty16 />
      <StyleProperty17 />
      <StyleProperty18 />
      <StyleProperty19 />
      <StyleProperty20 />
      <StyleProperty21 />
      <StyleProperty22 />
      <StyleProperty23 />
      <StyleProperty24 />
      <StyleProperty25 />
      <StyleProperty26 />
      <StyleProperty27 />
      <StyleProperty28 />
      <StyleProperty29 />
      <StyleProperty30 />
      <StyleProperty31 />
      <StyleProperty32 />
      <StyleProperty33 />
      <StyleProperty34 />
      <StyleProperty35 />
      <StyleProperty36 />
      <StyleProperty37 />
      <StyleProperty38 />
      <StyleProperty39 />
      <StyleProperty40 />
      <StyleProperty41 />
      <StyleProperty42 />
      <StyleProperty43 />
      <StyleProperty44 />
      <StyleProperty45 />
      <StyleProperty46 />
      <StyleProperty47 />
      <StyleProperty48 />
      <StyleProperty49 />
      <StyleProperty50 />
      <StyleProperty51 />
      <StyleProperty52 />
      <StyleProperty53 />
      <StyleProperty54 />
      <StyleProperty55 />
      <StyleProperty56 />
      <StyleProperty57 />
      <StyleProperty58 />
      <StyleProperty59 />
      <StyleProperty60 />
      <StyleProperty61 />
      <StyleProperty62 />
      <StyleProperty63 />
      <StyleProperty64 />
      <StyleProperty65 />
      <StyleProperty66 />
      <StyleProperty67 />
      <StyleProperty68 />
      <StyleProperty69 />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[848px]" data-name="Tabs">
      <Table1 />
    </div>
  );
}

function ColorBrand1() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(17,24,39,0.1),0px_0px_2px_0px_rgba(17,24,39,0.06)] shrink-0 w-full" data-name="color-brand">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start p-[40px] relative size-full">
          <Description1 />
          <Tabs1 />
        </div>
      </div>
    </div>
  );
}

function ColorInfo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color Info">
      <p className="[word-break:break-word] font-['Publico:Bold',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#1a1d21] text-[40px] w-full">Feedbacks</p>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <ColorInfo2 />
    </div>
  );
}

function DocsTableHeader8() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[264px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-pre">{`TOKEN  `}</p>
    </div>
  );
}

function DocsTableHeader9() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip px-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">DESCRIPTION</p>
    </div>
  );
}

function DocsTableHeader10() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase w-full">VALUE (RGBA/HEX)</p>
    </div>
  );
}

function DocsTableHeader11() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center max-w-[96px] overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">LIGHT MODE</p>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableHeader8 />
      <DocsTableHeader9 />
      <DocsTableHeader10 />
      <DocsTableHeader11 />
    </div>
  );
}

function Token70() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-neutral-default</p>
    </div>
  );
}

function DocsTableCell280() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token70 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell281() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for neutral feedback backgrounds with no positive or negative meaning.</p>
    </div>
  );
}

function ColumnLabel70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#434956</p>
      </div>
    </div>
  );
}

function DocsTableCell282() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel70 />
    </div>
  );
}

function Container150() {
  return (
    <div className="bg-[#434956] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell283() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container150 />
    </div>
  );
}

function StyleProperty70() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell280 />
      <DocsTableCell281 />
      <DocsTableCell282 />
      <DocsTableCell283 />
    </div>
  );
}

function Token71() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-neutral-subtle</p>
    </div>
  );
}

function DocsTableCell284() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token71 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell285() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle neutral feedback backgrounds that lightly structure the layout.</p>
    </div>
  );
}

function ColumnLabel71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FAFAFA</p>
      </div>
    </div>
  );
}

function DocsTableCell286() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel71 />
    </div>
  );
}

function Container151() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell287() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container151 />
    </div>
  );
}

function StyleProperty71() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell284 />
      <DocsTableCell285 />
      <DocsTableCell286 />
      <DocsTableCell287 />
    </div>
  );
}

function Token72() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-neutral-inverse</p>
    </div>
  );
}

function DocsTableCell288() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token72 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell289() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for neutral feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#F7F7F8</p>
      </div>
    </div>
  );
}

function DocsTableCell290() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel72 />
    </div>
  );
}

function Container152() {
  return (
    <div className="bg-[#f7f7f8] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell291() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container152 />
    </div>
  );
}

function StyleProperty72() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell288 />
      <DocsTableCell289 />
      <DocsTableCell290 />
      <DocsTableCell291 />
    </div>
  );
}

function Token73() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-neutral-subtle-inverse</p>
    </div>
  );
}

function DocsTableCell292() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token73 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell293() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle neutral feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#2B303B</p>
      </div>
    </div>
  );
}

function DocsTableCell294() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel73 />
    </div>
  );
}

function Container153() {
  return (
    <div className="bg-[#2b303b] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell295() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container153 />
    </div>
  );
}

function StyleProperty73() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell292 />
      <DocsTableCell293 />
      <DocsTableCell294 />
      <DocsTableCell295 />
    </div>
  );
}

function Token74() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-info-default</p>
    </div>
  );
}

function DocsTableCell296() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token74 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell297() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for informational feedback backgrounds highlighting important details.</p>
    </div>
  );
}

function ColumnLabel74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#234476</p>
      </div>
    </div>
  );
}

function DocsTableCell298() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel74 />
    </div>
  );
}

function Container154() {
  return (
    <div className="bg-[#234476] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell299() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container154 />
    </div>
  );
}

function StyleProperty74() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell296 />
      <DocsTableCell297 />
      <DocsTableCell298 />
      <DocsTableCell299 />
    </div>
  );
}

function Token75() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-info-subtle</p>
    </div>
  );
}

function DocsTableCell300() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token75 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell301() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle info feedback backgrounds that provide light emphasis.</p>
    </div>
  );
}

function ColumnLabel75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#D6E6FF</p>
      </div>
    </div>
  );
}

function DocsTableCell302() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel75 />
    </div>
  );
}

function Container155() {
  return (
    <div className="bg-[#d6e6ff] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell303() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container155 />
    </div>
  );
}

function StyleProperty75() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell300 />
      <DocsTableCell301 />
      <DocsTableCell302 />
      <DocsTableCell303 />
    </div>
  );
}

function Token76() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-info-inverse</p>
    </div>
  );
}

function DocsTableCell304() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token76 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell305() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for info feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#99C2FF</p>
      </div>
    </div>
  );
}

function DocsTableCell306() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel76 />
    </div>
  );
}

function Container156() {
  return (
    <div className="bg-[#99c2ff] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell307() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container156 />
    </div>
  );
}

function StyleProperty76() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell304 />
      <DocsTableCell305 />
      <DocsTableCell306 />
      <DocsTableCell307 />
    </div>
  );
}

function Token77() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-info-subtle-inverse</p>
    </div>
  );
}

function DocsTableCell308() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token77 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell309() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle info feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#152E54</p>
      </div>
    </div>
  );
}

function DocsTableCell310() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel77 />
    </div>
  );
}

function Container157() {
  return (
    <div className="bg-[#152e54] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell311() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container157 />
    </div>
  );
}

function StyleProperty77() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell308 />
      <DocsTableCell309 />
      <DocsTableCell310 />
      <DocsTableCell311 />
    </div>
  );
}

function Token78() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-warning-default</p>
    </div>
  );
}

function DocsTableCell312() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token78 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell313() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for warning feedback backgrounds drawing attention to potential issues.</p>
    </div>
  );
}

function ColumnLabel78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFBC11</p>
      </div>
    </div>
  );
}

function DocsTableCell314() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel78 />
    </div>
  );
}

function Container158() {
  return (
    <div className="bg-[#ffbc11] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell315() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container158 />
    </div>
  );
}

function StyleProperty78() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell312 />
      <DocsTableCell313 />
      <DocsTableCell314 />
      <DocsTableCell315 />
    </div>
  );
}

function Token79() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-warning-subtle</p>
    </div>
  );
}

function DocsTableCell316() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token79 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell317() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for subtle warning feedback backgrounds with light emphasis. `}</p>
    </div>
  );
}

function ColumnLabel79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFF3D6</p>
      </div>
    </div>
  );
}

function DocsTableCell318() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel79 />
    </div>
  );
}

function Container159() {
  return (
    <div className="bg-[#fff3d6] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell319() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container159 />
    </div>
  );
}

function StyleProperty79() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell316 />
      <DocsTableCell317 />
      <DocsTableCell318 />
      <DocsTableCell319 />
    </div>
  );
}

function Token80() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-warning-inverse</p>
    </div>
  );
}

function DocsTableCell320() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token80 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell321() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for warning feedback backgrounds drawing attention to potential issues on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFD467</p>
      </div>
    </div>
  );
}

function DocsTableCell322() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel80 />
    </div>
  );
}

function Container160() {
  return (
    <div className="bg-[#ffd467] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell323() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container160 />
    </div>
  );
}

function StyleProperty80() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell320 />
      <DocsTableCell321 />
      <DocsTableCell322 />
      <DocsTableCell323 />
    </div>
  );
}

function Token81() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-warning-subtle-inverse</p>
    </div>
  );
}

function DocsTableCell324() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token81 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell325() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle warning feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFBC11</p>
      </div>
    </div>
  );
}

function DocsTableCell326() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel81 />
    </div>
  );
}

function Container161() {
  return (
    <div className="bg-[#ffbc11] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell327() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container161 />
    </div>
  );
}

function StyleProperty81() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell324 />
      <DocsTableCell325 />
      <DocsTableCell326 />
      <DocsTableCell327 />
    </div>
  );
}

function Token82() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-success-default</p>
    </div>
  );
}

function DocsTableCell328() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token82 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell329() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for success feedback backgrounds confirming that an action was successful.</p>
    </div>
  );
}

function ColumnLabel82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#17663A</p>
      </div>
    </div>
  );
}

function DocsTableCell330() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel82 />
    </div>
  );
}

function Container162() {
  return (
    <div className="bg-[#17663a] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell331() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container162 />
    </div>
  );
}

function StyleProperty82() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell328 />
      <DocsTableCell329 />
      <DocsTableCell330 />
      <DocsTableCell331 />
    </div>
  );
}

function Token83() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-success-subtle</p>
    </div>
  );
}

function DocsTableCell332() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token83 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell333() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for subtle success feedback backgrounds with light emphasis. `}</p>
    </div>
  );
}

function ColumnLabel83() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#DFF8EA</p>
      </div>
    </div>
  );
}

function DocsTableCell334() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel83 />
    </div>
  );
}

function Container163() {
  return (
    <div className="bg-[#dff8ea] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell335() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container163 />
    </div>
  );
}

function StyleProperty83() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell332 />
      <DocsTableCell333 />
      <DocsTableCell334 />
      <DocsTableCell335 />
    </div>
  );
}

function Token84() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-success-inverse</p>
    </div>
  );
}

function DocsTableCell336() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token84 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell337() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for success feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#84E4AE</p>
      </div>
    </div>
  );
}

function DocsTableCell338() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel84 />
    </div>
  );
}

function Container164() {
  return (
    <div className="bg-[#84e4ae] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell339() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container164 />
    </div>
  );
}

function StyleProperty84() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell336 />
      <DocsTableCell337 />
      <DocsTableCell338 />
      <DocsTableCell339 />
    </div>
  );
}

function Token85() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-success-subtle-inverse</p>
    </div>
  );
}

function DocsTableCell340() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token85 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell341() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle success feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#0F4527</p>
      </div>
    </div>
  );
}

function DocsTableCell342() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel85 />
    </div>
  );
}

function Container165() {
  return (
    <div className="bg-[#0f4527] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell343() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container165 />
    </div>
  );
}

function StyleProperty85() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell340 />
      <DocsTableCell341 />
      <DocsTableCell342 />
      <DocsTableCell343 />
    </div>
  );
}

function Token86() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-error-default</p>
    </div>
  );
}

function DocsTableCell344() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token86 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell345() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for error feedback backgrounds signaling problems or corrections.</p>
    </div>
  );
}

function ColumnLabel86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#880727</p>
      </div>
    </div>
  );
}

function DocsTableCell346() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel86 />
    </div>
  );
}

function Container166() {
  return (
    <div className="bg-[#880727] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell347() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container166 />
    </div>
  );
}

function StyleProperty86() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell344 />
      <DocsTableCell345 />
      <DocsTableCell346 />
      <DocsTableCell347 />
    </div>
  );
}

function Token87() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-error-subtle</p>
    </div>
  );
}

function DocsTableCell348() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token87 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell349() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle error feedback backgrounds that keep emphasis light.</p>
    </div>
  );
}

function ColumnLabel87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">{` `}</p>
      </div>
    </div>
  );
}

function DocsTableCell350() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel87 />
    </div>
  );
}

function Container167() {
  return (
    <div className="bg-[#fdd8e1] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell351() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container167 />
    </div>
  );
}

function StyleProperty87() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell348 />
      <DocsTableCell349 />
      <DocsTableCell350 />
      <DocsTableCell351 />
    </div>
  );
}

function Token88() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-error-inverse</p>
    </div>
  );
}

function DocsTableCell352() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token88 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell353() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for error feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#F53D6B</p>
      </div>
    </div>
  );
}

function DocsTableCell354() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel88 />
    </div>
  );
}

function Container168() {
  return (
    <div className="bg-[#f98ba6] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell355() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container168 />
    </div>
  );
}

function StyleProperty88() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell352 />
      <DocsTableCell353 />
      <DocsTableCell354 />
      <DocsTableCell355 />
    </div>
  );
}

function Token89() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-feedback-error-subtle-inverse</p>
    </div>
  );
}

function DocsTableCell356() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token89 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell357() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for subtle error feedback backgrounds on dark, colored, or high-contrast backgrounds.</p>
    </div>
  );
}

function ColumnLabel89() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#880727</p>
      </div>
    </div>
  );
}

function DocsTableCell358() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel89 />
    </div>
  );
}

function Container169() {
  return (
    <div className="bg-[#880727] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell359() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container169 />
    </div>
  );
}

function StyleProperty89() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell356 />
      <DocsTableCell357 />
      <DocsTableCell358 />
      <DocsTableCell359 />
    </div>
  );
}

function Table2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table">
      <TableHeader2 />
      <StyleProperty70 />
      <StyleProperty71 />
      <StyleProperty72 />
      <StyleProperty73 />
      <StyleProperty74 />
      <StyleProperty75 />
      <StyleProperty76 />
      <StyleProperty77 />
      <StyleProperty78 />
      <StyleProperty79 />
      <StyleProperty80 />
      <StyleProperty81 />
      <StyleProperty82 />
      <StyleProperty83 />
      <StyleProperty84 />
      <StyleProperty85 />
      <StyleProperty86 />
      <StyleProperty87 />
      <StyleProperty88 />
      <StyleProperty89 />
    </div>
  );
}

function Tabs2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[848px]" data-name="Tabs">
      <Table2 />
    </div>
  );
}

function ColorBrand2() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(17,24,39,0.1),0px_0px_2px_0px_rgba(17,24,39,0.06)] shrink-0 w-full" data-name="color-brand">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start p-[40px] relative size-full">
          <Description2 />
          <Tabs2 />
        </div>
      </div>
    </div>
  );
}

function ColorInfo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color Info">
      <p className="[word-break:break-word] font-['Publico:Bold',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#1a1d21] text-[40px] w-full">Elevation</p>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <ColorInfo3 />
    </div>
  );
}

function DocsTableHeader12() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[264px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-pre">{`TOKEN  `}</p>
    </div>
  );
}

function DocsTableHeader13() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip px-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">DESCRIPTION</p>
    </div>
  );
}

function DocsTableHeader14() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase w-full">VALUE (RGBA/HEX)</p>
    </div>
  );
}

function DocsTableHeader15() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center max-w-[96px] overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">LIGHT MODE</p>
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableHeader12 />
      <DocsTableHeader13 />
      <DocsTableHeader14 />
      <DocsTableHeader15 />
    </div>
  );
}

function ColumnLabel90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex items-start pl-[8px] pr-[12px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Italic',sans-serif] font-normal italic leading-[20px] min-w-px relative text-[#1a1d21] text-[14px]">Applied only over images to enhance readability and create depth. Must be combined with blur effect to achieve the right visual style.</p>
      </div>
    </div>
  );
}

function DocsTableCell360() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name=".Docs/Table/Cell">
      <ColumnLabel90 />
    </div>
  );
}

function StyleProperty90() {
  return (
    <div className="content-stretch flex h-[33px] items-center relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell360 />
    </div>
  );
}

function Token90() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-blur-medium</p>
    </div>
  );
}

function DocsTableCell361() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token90 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell362() {
  return (
    <div className="content-stretch flex flex-col h-[132px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as a medium blur overlay on images (e.g. hero banners, immersive headers) to improve text readability without overpowering the background. Must be combined with a blur effect to achieve the visual depth.</p>
    </div>
  );
}

function ColumnLabel91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#535353 (30%)</p>
      </div>
    </div>
  );
}

function DocsTableCell363() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel91 />
    </div>
  );
}

function Container171() {
  return (
    <div className="bg-[#535353] flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container172() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(83,83,83,0.3)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container171 />
      <Container172 />
    </div>
  );
}

function DocsTableCell364() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container170 />
    </div>
  );
}

function StyleProperty91() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell361 />
      <DocsTableCell362 />
      <DocsTableCell363 />
      <DocsTableCell364 />
    </div>
  );
}

function Token91() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-blur-high</p>
    </div>
  );
}

function DocsTableCell365() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token91 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell366() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as a stronger blur overlay on images when higher contrast and readability are needed for text or key content. Always test legibility carefully.</p>
    </div>
  );
}

function ColumnLabel92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#535353 (50%)</p>
      </div>
    </div>
  );
}

function DocsTableCell367() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel92 />
    </div>
  );
}

function Container176() {
  return (
    <div className="bg-[#535353] flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container177() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(83,83,83,0.5)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container176 />
      <Container177 />
    </div>
  );
}

function Container174() {
  return (
    <div className="bg-[rgba(83,83,83,0.5)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container175 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container174 />
    </div>
  );
}

function DocsTableCell368() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container173 />
    </div>
  );
}

function StyleProperty92() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell365 />
      <DocsTableCell366 />
      <DocsTableCell367 />
      <DocsTableCell368 />
    </div>
  );
}

function ColumnLabel93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex items-start pl-[8px] pr-[12px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Italic',sans-serif] font-normal italic leading-[20px] min-w-px relative text-[#1a1d21] text-[14px]">{`Applied behind modals, drawers, or focus states to guide attention. `}</p>
      </div>
    </div>
  );
}

function DocsTableCell369() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name=".Docs/Table/Cell">
      <ColumnLabel93 />
    </div>
  );
}

function StyleProperty93() {
  return (
    <div className="content-stretch flex h-[33px] items-center relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell369 />
    </div>
  );
}

function Token92() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-scrim-low</p>
    </div>
  );
}

function DocsTableCell370() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token92 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell371() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as a low-opacity scrim background to softly darken the interface behind a modal, drawer, or tutorial, ensuring focus on the foreground.</p>
    </div>
  );
}

function ColumnLabel94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (30%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.3</p>
      </div>
    </div>
  );
}

function DocsTableCell372() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel94 />
    </div>
  );
}

function Container181() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container182() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container181 />
      <Container182 />
    </div>
  );
}

function Container179() {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container180 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container179 />
    </div>
  );
}

function DocsTableCell373() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container178 />
    </div>
  );
}

function StyleProperty94() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell370 />
      <DocsTableCell371 />
      <DocsTableCell372 />
      <DocsTableCell373 />
    </div>
  );
}

function Token93() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-scrim-high</p>
    </div>
  );
}

function DocsTableCell374() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token93 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell375() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as a high-opacity scrim background when stronger dimming is required to emphasize the foreground element and reduce background distractions.</p>
    </div>
  );
}

function ColumnLabel95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#FFFFFF (30%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">255,255,255, 0.3</p>
      </div>
    </div>
  );
}

function DocsTableCell376() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel95 />
    </div>
  );
}

function Container186() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container187() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.8)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container186 />
      <Container187 />
    </div>
  );
}

function Container184() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container185 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container184 />
    </div>
  );
}

function DocsTableCell377() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container183 />
    </div>
  );
}

function StyleProperty95() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell374 />
      <DocsTableCell375 />
      <DocsTableCell376 />
      <DocsTableCell377 />
    </div>
  );
}

function ColumnLabel96() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex items-start pl-[8px] pr-[12px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Italic',sans-serif] font-normal italic leading-[20px] min-w-px relative text-[#1a1d21] text-[14px]">Uniform overlays applied on images for accessibility and clarity.</p>
      </div>
    </div>
  );
}

function DocsTableCell378() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name=".Docs/Table/Cell">
      <ColumnLabel96 />
    </div>
  );
}

function StyleProperty96() {
  return (
    <div className="content-stretch flex h-[33px] items-center relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell378 />
    </div>
  );
}

function Token94() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-solid-none</p>
    </div>
  );
}

function DocsTableCell379() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token94 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell380() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full whitespace-pre-wrap">{`Use for initial state for animation purpose  on an image, keeping the image fully visible on default state.`}</p>
    </div>
  );
}

function ColumnLabel97() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (0%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0</p>
      </div>
    </div>
  );
}

function DocsTableCell381() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel97 />
    </div>
  );
}

function Container191() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container192() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container191 />
      <Container192 />
    </div>
  );
}

function Container189() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container190 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container189 />
    </div>
  );
}

function DocsTableCell382() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container188 />
    </div>
  );
}

function StyleProperty97() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell379 />
      <DocsTableCell380 />
      <DocsTableCell381 />
      <DocsTableCell382 />
    </div>
  );
}

function Token95() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-solid-low</p>
    </div>
  );
}

function DocsTableCell383() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token95 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell384() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as a low-opacity solid overlay on images to enhance content readability without fully covering the background.</p>
    </div>
  );
}

function ColumnLabel98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (30%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.3</p>
      </div>
    </div>
  );
}

function DocsTableCell385() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel98 />
    </div>
  );
}

function Container196() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container197() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container196 />
      <Container197 />
    </div>
  );
}

function Container194() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container195 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container194 />
    </div>
  );
}

function DocsTableCell386() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container193 />
    </div>
  );
}

function StyleProperty98() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell383 />
      <DocsTableCell384 />
      <DocsTableCell385 />
      <DocsTableCell386 />
    </div>
  );
}

function Token96() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-solid-medium</p>
    </div>
  );
}

function DocsTableCell387() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token96 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell388() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as a medium-opacity solid overlay on images to provide stronger readability support for text or UI elements.</p>
    </div>
  );
}

function ColumnLabel99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (70%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.7</p>
      </div>
    </div>
  );
}

function DocsTableCell389() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel99 />
    </div>
  );
}

function Container201() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container202() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container201 />
      <Container202 />
    </div>
  );
}

function Container199() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container200 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container199 />
    </div>
  );
}

function DocsTableCell390() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container198 />
    </div>
  );
}

function StyleProperty99() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell387 />
      <DocsTableCell388 />
      <DocsTableCell389 />
      <DocsTableCell390 />
    </div>
  );
}

function Token97() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-solid-high</p>
    </div>
  );
}

function DocsTableCell391() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token97 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell392() {
  return (
    <div className="content-stretch flex flex-col h-[92px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use as a high-opacity solid overlay on images when maximum contrast is required to ensure accessibility and clarity.</p>
    </div>
  );
}

function ColumnLabel100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (90%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.9</p>
      </div>
    </div>
  );
}

function DocsTableCell393() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel100 />
    </div>
  );
}

function Container206() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container207() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.9)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container205() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container206 />
      <Container207 />
    </div>
  );
}

function Container204() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container205 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container204 />
    </div>
  );
}

function DocsTableCell394() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container203 />
    </div>
  );
}

function StyleProperty100() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell391 />
      <DocsTableCell392 />
      <DocsTableCell393 />
      <DocsTableCell394 />
    </div>
  );
}

function ColumnLabel101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex items-start pl-[8px] pr-[12px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Italic',sans-serif] font-normal h-[40px] italic leading-[20px] min-w-px relative text-[#1a1d21] text-[14px]">Use together to build a low-opacity gradient overlay on images, applied either from bottom-to-top (portrait) or corner-to-corner (landscape). Enhances readability in a subtle way without overpowering the background.</p>
      </div>
    </div>
  );
}

function DocsTableCell395() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px overflow-clip relative" data-name=".Docs/Table/Cell">
      <ColumnLabel101 />
    </div>
  );
}

function StyleProperty101() {
  return (
    <div className="content-stretch flex h-[60px] items-center relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell395 />
    </div>
  );
}

function Token98() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-low-start</p>
    </div>
  );
}

function DocsTableCell396() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token98 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell397() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the start point of a low gradient (0%)</p>
    </div>
  );
}

function ColumnLabel102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (50%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.5</p>
      </div>
    </div>
  );
}

function DocsTableCell398() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel102 />
    </div>
  );
}

function Container211() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container212() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container211 />
      <Container212 />
    </div>
  );
}

function Container209() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container210 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container208() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container209 />
    </div>
  );
}

function DocsTableCell399() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container208 />
    </div>
  );
}

function StyleProperty102() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell396 />
      <DocsTableCell397 />
      <DocsTableCell398 />
      <DocsTableCell399 />
    </div>
  );
}

function Token99() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-low-middle</p>
    </div>
  );
}

function DocsTableCell400() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token99 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell401() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the middle point of a low gradient (between 30-50%)</p>
    </div>
  );
}

function ColumnLabel103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (20%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.2</p>
      </div>
    </div>
  );
}

function DocsTableCell402() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel103 />
    </div>
  );
}

function Container216() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container217() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container216 />
      <Container217 />
    </div>
  );
}

function Container214() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container215 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container214 />
    </div>
  );
}

function DocsTableCell403() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container213 />
    </div>
  );
}

function StyleProperty103() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell400 />
      <DocsTableCell401 />
      <DocsTableCell402 />
      <DocsTableCell403 />
    </div>
  );
}

function Token100() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-low-end</p>
    </div>
  );
}

function DocsTableCell404() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token100 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell405() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the end point of a low gradient (100%)</p>
    </div>
  );
}

function ColumnLabel104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (5%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.05</p>
      </div>
    </div>
  );
}

function DocsTableCell406() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel104 />
    </div>
  );
}

function Container221() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container222() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container221 />
      <Container222 />
    </div>
  );
}

function Container219() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container220 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container219 />
    </div>
  );
}

function DocsTableCell407() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container218 />
    </div>
  );
}

function StyleProperty104() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell404 />
      <DocsTableCell405 />
      <DocsTableCell406 />
      <DocsTableCell407 />
    </div>
  );
}

function ColumnLabel105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex items-start pl-[8px] pr-[12px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Italic',sans-serif] font-normal h-[40px] italic leading-[20px] min-w-px relative text-[#1a1d21] text-[14px]">Use together to build a medium-opacity gradient overlay on images, applied either from bottom-to-top (portrait) or corner-to-corner (landscape). Creating stronger contrast for text and content while maintaining depth.</p>
      </div>
    </div>
  );
}

function DocsTableCell408() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px overflow-clip relative" data-name=".Docs/Table/Cell">
      <ColumnLabel105 />
    </div>
  );
}

function StyleProperty105() {
  return (
    <div className="content-stretch flex h-[60px] items-center relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell408 />
    </div>
  );
}

function Token101() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-medium-start</p>
    </div>
  );
}

function DocsTableCell409() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token101 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell410() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the start point of a medium gradient (0%)</p>
    </div>
  );
}

function ColumnLabel106() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (70%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.7</p>
      </div>
    </div>
  );
}

function DocsTableCell411() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel106 />
    </div>
  );
}

function Container226() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container227() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container226 />
      <Container227 />
    </div>
  );
}

function Container224() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container225 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container224 />
    </div>
  );
}

function DocsTableCell412() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container223 />
    </div>
  );
}

function StyleProperty106() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell409 />
      <DocsTableCell410 />
      <DocsTableCell411 />
      <DocsTableCell412 />
    </div>
  );
}

function Token102() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-medium-middle</p>
    </div>
  );
}

function DocsTableCell413() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token102 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell414() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the middle point of a medium gradient (between 30-50%)</p>
    </div>
  );
}

function ColumnLabel107() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (50%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.5</p>
      </div>
    </div>
  );
}

function DocsTableCell415() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel107 />
    </div>
  );
}

function Container233() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container234() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container233 />
      <Container234 />
    </div>
  );
}

function Container231() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container232 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container231 />
    </div>
  );
}

function Container229() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container230 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container228() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container229 />
    </div>
  );
}

function DocsTableCell416() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container228 />
    </div>
  );
}

function StyleProperty107() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell413 />
      <DocsTableCell414 />
      <DocsTableCell415 />
      <DocsTableCell416 />
    </div>
  );
}

function Token103() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-medium-end</p>
    </div>
  );
}

function DocsTableCell417() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token103 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell418() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the end point of a medium gradient (100%)</p>
    </div>
  );
}

function ColumnLabel108() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (15%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.15</p>
      </div>
    </div>
  );
}

function DocsTableCell419() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel108 />
    </div>
  );
}

function Container240() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container241() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container239() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container240 />
      <Container241 />
    </div>
  );
}

function Container238() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container239 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container238 />
    </div>
  );
}

function Container236() {
  return (
    <div className="bg-[rgba(0,0,0,0.15)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container237 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container236 />
    </div>
  );
}

function DocsTableCell420() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container235 />
    </div>
  );
}

function StyleProperty108() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell417 />
      <DocsTableCell418 />
      <DocsTableCell419 />
      <DocsTableCell420 />
    </div>
  );
}

function ColumnLabel109() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex items-start pl-[8px] pr-[12px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Italic',sans-serif] font-normal h-[40px] italic leading-[20px] min-w-px relative text-[#1a1d21] text-[14px]">Use together to build a high-opacity gradient overlay on images, applied either from bottom-to-top (portrait) or corner-to-corner (landscape). Ensuring maximum accessibility and text clarity. Recommended for complex or high-detail backgrounds.</p>
      </div>
    </div>
  );
}

function DocsTableCell421() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px overflow-clip relative" data-name=".Docs/Table/Cell">
      <ColumnLabel109 />
    </div>
  );
}

function StyleProperty109() {
  return (
    <div className="content-stretch flex h-[60px] items-center relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell421 />
    </div>
  );
}

function Token104() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-high-start</p>
    </div>
  );
}

function DocsTableCell422() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token104 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell423() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the start point of a high gradient (0%)</p>
    </div>
  );
}

function ColumnLabel110() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (90%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.9</p>
      </div>
    </div>
  );
}

function DocsTableCell424() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel110 />
    </div>
  );
}

function Container247() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container248() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.9)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container247 />
      <Container248 />
    </div>
  );
}

function Container245() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container246 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container244() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container245 />
    </div>
  );
}

function Container243() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container244 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container243 />
    </div>
  );
}

function DocsTableCell425() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container242 />
    </div>
  );
}

function StyleProperty110() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell422 />
      <DocsTableCell423 />
      <DocsTableCell424 />
      <DocsTableCell425 />
    </div>
  );
}

function Token105() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-high-middle</p>
    </div>
  );
}

function DocsTableCell426() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token105 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell427() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the middle point of a high gradient (between 30-50%)</p>
    </div>
  );
}

function ColumnLabel111() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (70%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.7</p>
      </div>
    </div>
  );
}

function DocsTableCell428() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel111 />
    </div>
  );
}

function Container254() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container255() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container253() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container254 />
      <Container255 />
    </div>
  );
}

function Container252() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container253 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container252 />
    </div>
  );
}

function Container250() {
  return (
    <div className="bg-[rgba(0,0,0,0.7)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container251 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container249() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container250 />
    </div>
  );
}

function DocsTableCell429() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container249 />
    </div>
  );
}

function StyleProperty111() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell426 />
      <DocsTableCell427 />
      <DocsTableCell428 />
      <DocsTableCell429 />
    </div>
  );
}

function Token106() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-elevation-overlay-gradient-high-end</p>
    </div>
  );
}

function DocsTableCell430() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token106 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell431() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">Use for the end point of a high gradient (100%)</p>
    </div>
  );
}

function ColumnLabel112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[20px] px-[8px] relative size-full text-[#1a1d21] text-[14px] text-center whitespace-nowrap">
        <p className="overflow-hidden relative shrink-0 text-ellipsis">#000000 (30%)</p>
        <p className="overflow-hidden relative shrink-0 text-ellipsis">0,0,0, 0.3</p>
      </div>
    </div>
  );
}

function DocsTableCell432() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel112 />
    </div>
  );
}

function Container261() {
  return (
    <div className="bg-black flex-[1_0_0] h-[48px] min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function Container262() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-br-[8px] rounded-tr-[8px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0 rounded-br-[8px] rounded-tr-[8px]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
      <div aria-hidden className="absolute border border-[#c7cad1] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function Container260() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container261 />
      <Container262 />
    </div>
  );
}

function Container259() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container260 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container258() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container259 />
    </div>
  );
}

function Container257() {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Container258 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-name="container">
      <Container257 />
    </div>
  );
}

function DocsTableCell433() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container256 />
    </div>
  );
}

function StyleProperty112() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell430 />
      <DocsTableCell431 />
      <DocsTableCell432 />
      <DocsTableCell433 />
    </div>
  );
}

function Table3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table">
      <TableHeader3 />
      <StyleProperty90 />
      <StyleProperty91 />
      <StyleProperty92 />
      <StyleProperty93 />
      <StyleProperty94 />
      <StyleProperty95 />
      <StyleProperty96 />
      <StyleProperty97 />
      <StyleProperty98 />
      <StyleProperty99 />
      <StyleProperty100 />
      <StyleProperty101 />
      <StyleProperty102 />
      <StyleProperty103 />
      <StyleProperty104 />
      <StyleProperty105 />
      <StyleProperty106 />
      <StyleProperty107 />
      <StyleProperty108 />
      <StyleProperty109 />
      <StyleProperty110 />
      <StyleProperty111 />
      <StyleProperty112 />
    </div>
  );
}

function Tabs3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[848px]" data-name="Tabs">
      <Table3 />
    </div>
  );
}

function ColorBrand3() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(17,24,39,0.1),0px_0px_2px_0px_rgba(17,24,39,0.06)] shrink-0 w-full" data-name="color-brand">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start p-[40px] relative size-full">
          <Description3 />
          <Tabs3 />
        </div>
      </div>
    </div>
  );
}

function ColorInfo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color Info">
      <p className="[word-break:break-word] font-['Publico:Bold',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#1a1d21] text-[40px] w-full">Badge</p>
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <ColorInfo4 />
    </div>
  );
}

function DocsTableHeader16() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[264px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-pre">{`TOKEN  `}</p>
    </div>
  );
}

function DocsTableHeader17() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip px-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">DESCRIPTION</p>
    </div>
  );
}

function DocsTableHeader18() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase w-full">VALUE (RGBA/HEX)</p>
    </div>
  );
}

function DocsTableHeader19() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center max-w-[96px] overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">LIGHT MODE</p>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableHeader16 />
      <DocsTableHeader17 />
      <DocsTableHeader18 />
      <DocsTableHeader19 />
    </div>
  );
}

function Token107() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-badge-coral</p>
    </div>
  );
}

function DocsTableCell434() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token107 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell435() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use this background only for decorative badges. `}</p>
    </div>
  );
}

function ColumnLabel113() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FF9C62</p>
      </div>
    </div>
  );
}

function DocsTableCell436() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel113 />
    </div>
  );
}

function Container263() {
  return (
    <div className="bg-[#ff9c62] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell437() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container263 />
    </div>
  );
}

function StyleProperty113() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell434 />
      <DocsTableCell435 />
      <DocsTableCell436 />
      <DocsTableCell437 />
    </div>
  );
}

function Token108() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-badge-teal</p>
    </div>
  );
}

function DocsTableCell438() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token108 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell439() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use this background only for decorative badges. `}</p>
    </div>
  );
}

function ColumnLabel114() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#0F717F</p>
      </div>
    </div>
  );
}

function DocsTableCell440() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel114 />
    </div>
  );
}

function Container264() {
  return (
    <div className="bg-[#0f717f] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell441() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container264 />
    </div>
  );
}

function StyleProperty114() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell438 />
      <DocsTableCell439 />
      <DocsTableCell440 />
      <DocsTableCell441 />
    </div>
  );
}

function Token109() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-badge-leaf-green</p>
    </div>
  );
}

function DocsTableCell442() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token109 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell443() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use this background only for decorative badges. `}</p>
    </div>
  );
}

function ColumnLabel115() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#58C645</p>
      </div>
    </div>
  );
}

function DocsTableCell444() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel115 />
    </div>
  );
}

function Container265() {
  return (
    <div className="bg-[#58c645] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell445() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container265 />
    </div>
  );
}

function StyleProperty115() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell442 />
      <DocsTableCell443 />
      <DocsTableCell444 />
      <DocsTableCell445 />
    </div>
  );
}

function Token110() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-badge-cotton-candy</p>
    </div>
  );
}

function DocsTableCell446() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token110 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell447() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use this background only for decorative badges. `}</p>
    </div>
  );
}

function ColumnLabel116() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFB4CE</p>
      </div>
    </div>
  );
}

function DocsTableCell448() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel116 />
    </div>
  );
}

function Container266() {
  return (
    <div className="bg-[#ffb4ce] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell449() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container266 />
    </div>
  );
}

function StyleProperty116() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell446 />
      <DocsTableCell447 />
      <DocsTableCell448 />
      <DocsTableCell449 />
    </div>
  );
}

function Token111() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-badge-sky-blue</p>
    </div>
  );
}

function DocsTableCell450() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token111 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell451() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use this background only for decorative badges. `}</p>
    </div>
  );
}

function ColumnLabel117() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#74BDE8</p>
      </div>
    </div>
  );
}

function DocsTableCell452() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel117 />
    </div>
  );
}

function Container267() {
  return (
    <div className="bg-[#74bde8] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell453() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container267 />
    </div>
  );
}

function StyleProperty117() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell450 />
      <DocsTableCell451 />
      <DocsTableCell452 />
      <DocsTableCell453 />
    </div>
  );
}

function Token112() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-badge-grape</p>
    </div>
  );
}

function DocsTableCell454() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token112 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell455() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use this background only for decorative badges. `}</p>
    </div>
  );
}

function ColumnLabel118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#614FE8</p>
      </div>
    </div>
  );
}

function DocsTableCell456() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel118 />
    </div>
  );
}

function Container268() {
  return (
    <div className="bg-[#614fe8] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell457() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container268 />
    </div>
  );
}

function StyleProperty118() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell454 />
      <DocsTableCell455 />
      <DocsTableCell456 />
      <DocsTableCell457 />
    </div>
  );
}

function Token113() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-badge-mint-green</p>
    </div>
  );
}

function DocsTableCell458() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token113 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell459() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use this background only for decorative badges. `}</p>
    </div>
  );
}

function ColumnLabel119() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#81EEBB</p>
      </div>
    </div>
  );
}

function DocsTableCell460() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel119 />
    </div>
  );
}

function Container269() {
  return (
    <div className="bg-[#81eebb] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell461() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container269 />
    </div>
  );
}

function StyleProperty119() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell458 />
      <DocsTableCell459 />
      <DocsTableCell460 />
      <DocsTableCell461 />
    </div>
  );
}

function Token114() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-badge-sunshine</p>
    </div>
  );
}

function DocsTableCell462() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token114 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell463() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use this background only for decorative badges. `}</p>
    </div>
  );
}

function ColumnLabel120() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFF06C</p>
      </div>
    </div>
  );
}

function DocsTableCell464() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel120 />
    </div>
  );
}

function Container270() {
  return (
    <div className="bg-[#fff06c] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell465() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container270 />
    </div>
  );
}

function StyleProperty120() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell462 />
      <DocsTableCell463 />
      <DocsTableCell464 />
      <DocsTableCell465 />
    </div>
  );
}

function Table4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table">
      <TableHeader4 />
      <StyleProperty113 />
      <StyleProperty114 />
      <StyleProperty115 />
      <StyleProperty116 />
      <StyleProperty117 />
      <StyleProperty118 />
      <StyleProperty119 />
      <StyleProperty120 />
    </div>
  );
}

function Tabs4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[848px]" data-name="Tabs">
      <Table4 />
    </div>
  );
}

function ColorBrand4() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(17,24,39,0.1),0px_0px_2px_0px_rgba(17,24,39,0.06)] shrink-0 w-full" data-name="color-brand">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start p-[40px] relative size-full">
          <Description4 />
          <Tabs4 />
        </div>
      </div>
    </div>
  );
}

function ColorInfo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color Info">
      <p className="[word-break:break-word] font-['Publico:Bold',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#1a1d21] text-[40px] w-full">Footer</p>
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <ColorInfo5 />
    </div>
  );
}

function DocsTableHeader20() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[264px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-pre">{`TOKEN  `}</p>
    </div>
  );
}

function DocsTableHeader21() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip px-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">DESCRIPTION</p>
    </div>
  );
}

function DocsTableHeader22() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase w-full">VALUE (RGBA/HEX)</p>
    </div>
  );
}

function DocsTableHeader23() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center max-w-[96px] overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Header">
      <p className="[word-break:break-word] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#606776] text-[12px] tracking-[1px] uppercase whitespace-nowrap">LIGHT MODE</p>
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableHeader20 />
      <DocsTableHeader21 />
      <DocsTableHeader22 />
      <DocsTableHeader23 />
    </div>
  );
}

function Token115() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-footer-default</p>
    </div>
  );
}

function DocsTableCell466() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token115 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell467() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use for the background of the footer. `}</p>
    </div>
  );
}

function ColumnLabel121() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#030511</p>
      </div>
    </div>
  );
}

function DocsTableCell468() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel121 />
    </div>
  );
}

function Container271() {
  return (
    <div className="bg-[#030511] relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell469() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container271 />
    </div>
  );
}

function StyleProperty121() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell466 />
      <DocsTableCell467 />
      <DocsTableCell468 />
      <DocsTableCell469 />
    </div>
  );
}

function Token116() {
  return (
    <div className="bg-[#efeff1] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="token">
      <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] max-w-[230px] relative shrink-0 text-[#434956] text-[14px] whitespace-nowrap">color-bg-footer-soft</p>
    </div>
  );
}

function DocsTableCell470() {
  return (
    <div className="flex-[1_0_0] max-w-[264px] min-w-px relative" data-name=".Docs/Table/Cell">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pr-[16px] relative size-full">
          <Token116 />
        </div>
      </div>
    </div>
  );
}

function DocsTableCell471() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center overflow-clip p-[16px] relative shrink-0 w-[340px]" data-name=".Docs/Table/Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] min-h-px relative text-[#1a1d21] text-[14px] w-full">{`Use soft alternative for the background of the footer. `}</p>
    </div>
  );
}

function ColumnLabel122() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column Label">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[20px] overflow-hidden relative shrink-0 text-[#1a1d21] text-[14px] text-center text-ellipsis whitespace-nowrap">#FFFFFF</p>
      </div>
    </div>
  );
}

function DocsTableCell472() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[146px]" data-name=".Docs/Table/Cell">
      <ColumnLabel122 />
    </div>
  );
}

function Container272() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="container">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DocsTableCell473() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[96px]" data-name=".Docs/Table/Cell">
      <Container272 />
    </div>
  );
}

function StyleProperty122() {
  return (
    <div className="content-stretch flex items-center min-h-[88px] py-[12px] relative shrink-0 w-full" data-name="Style Property">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <DocsTableCell470 />
      <DocsTableCell471 />
      <DocsTableCell472 />
      <DocsTableCell473 />
    </div>
  );
}

function Table5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table">
      <TableHeader5 />
      <StyleProperty121 />
      <StyleProperty122 />
    </div>
  );
}

function Tabs5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[848px]" data-name="Tabs">
      <Table5 />
    </div>
  );
}

function ColorBrand5() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(17,24,39,0.1),0px_0px_2px_0px_rgba(17,24,39,0.06)] shrink-0 w-full" data-name="color-brand">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start p-[40px] relative size-full">
          <Description5 />
          <Tabs5 />
        </div>
      </div>
    </div>
  );
}

function GlobalColorWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative rounded-[8px] shrink-0 w-[928px]" data-name="global-color-wrapper">
      <ColorBrand />
      <ColorBrand1 />
      <ColorBrand2 />
      <ColorBrand3 />
      <ColorBrand4 />
      <ColorBrand5 />
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[40px] items-start p-[40px] relative rounded-[16px] size-full" data-name="Background">
      <DesignSystemHeader />
      <GlobalColorWrapper />
    </div>
  );
}