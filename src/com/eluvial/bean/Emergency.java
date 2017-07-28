package com.eluvial.bean;

public class Emergency {
	//定义数据成员
		private int emerId;//定义数据成员emerId
		private String emerType;//定义应急信息类型
		private String emerCase;//定义突发情况
		private String emerSolution;//定义解决方案
		//定义getter和setter方法
		public int getEmerId() {
			return emerId;
		}
		public void setEmerId(int emerId) {
			this.emerId = emerId;
		}
		public String getEmerType() {
			return emerType;
		}
		public void setEmerType(String emerType) {
			this.emerType = emerType;
		}
		public String getEmerCase() {
			return emerCase;
		}
		public void setEmerCase(String emerCase) {
			this.emerCase = emerCase;
		}
		public String getEmerSolution() {
			return emerSolution;
		}
		public void setEmerSolution(String emerSolution) {
			this.emerSolution = emerSolution;
		}
		
		@Override
		public String toString() {
			return "突发应急信息 [序号=" + emerId + ", 类型=" + emerType
					+ ", 突发情况=" + emerCase + ", 解决方案=" + emerSolution
					+ "]";
		}
		
		
}
