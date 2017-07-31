USE [aknightsfeast]
GO

/****** Object:  Table [lknight1].[Menus]    Script Date: 7/22/2017 4:04:14 PM ******/
DROP TABLE [lknight1].[Menus]
GO

/****** Object:  Table [lknight1].[Menus]    Script Date: 7/22/2017 4:04:14 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [lknight1].[Menus](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DeliveryDate] [date] NOT NULL,
	[LowCarbKeto] [nvarchar](max) NULL,
	[Paleo] [nvarchar](max) NULL,
	[Vegetarian] [nvarchar](max) NULL,
	[Vegan] [nvarchar](max) NULL,
	[Other] [nvarchar](max) NULL,
 CONSTRAINT [PK_Menus] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

