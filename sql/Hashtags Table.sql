USE [aknightsfeast]
GO

/****** Object:  Table [lknight1].[Hashtags]    Script Date: 7/22/2017 4:01:46 PM ******/
DROP TABLE [lknight1].[Hashtags]
GO

/****** Object:  Table [lknight1].[Hashtags]    Script Date: 7/22/2017 4:01:46 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [lknight1].[Hashtags](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Tag] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Hashtags] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


